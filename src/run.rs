use actix_files::Files;
use actix_web::{
    dev::Server, get, http::StatusCode, web, App, Error, HttpRequest, HttpResponse, HttpServer,
    Responder,
};
use futures::{future::ok, stream::once};
use ssr_rs::Ssr;
use std::fs::read_to_string;
use std::net::TcpListener;
use std::sync::Mutex;

struct AppData {
    js_source: String,
}

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let _ = web::Data::new(Mutex::new(AppData {
        js_source: read_to_string("./dist/index.js").expect("File not found"),
    }));

    let server = HttpServer::new(move || {
        App::new()
            .service(Files::new("/styles", "./dist/styles/").show_files_listing())
            .service(Files::new("/images", "./dist/images/").show_files_listing())
            .service(Files::new("/scripts", "./dist/scripts/").show_files_listing())
            .route("/health_check", web::get().to(health_check))
            .service(index)
    })
    .listen(listener)?
    .run();
    Ok(server)
}

#[get("*")]
async fn index(req: HttpRequest, data: web::Data<Mutex<AppData>>) -> impl Responder {
    let props = format!(
        r##"{{
            "location": "{}",
            "context": {{}}
        }}"##,
        req.uri()
    );

    let response_body = Ssr::render_to_string(&data.lock().unwrap().js_source, "SSR", Some(&props));

    let body = once(ok::<_, Error>(web::Bytes::from(response_body)));

    //let body = once(ok::<_, Error>(web::Bytes::from("Hello world".to_owned())));

    HttpResponse::build(StatusCode::OK)
        .content_type("text/html; charset=utf-8")
        .streaming(body)
}

async fn health_check() -> impl Responder {
    HttpResponse::Ok().finish()
}
