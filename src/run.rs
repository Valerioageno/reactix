use actix_files as fs;
use actix_web::{dev::Server, http::StatusCode, web, App, Error, HttpResponse, HttpServer};
use futures::{future::ok, stream::once};
use ssr_rs::Ssr;
use std::fs::read_to_string;
use std::net::TcpListener;

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server = HttpServer::new(move || 
        App::new()
            .service(fs::Files::new("/styles", "./dist/styles/").show_files_listing())
            .service(fs::Files::new("/images", "./dist/images/").show_files_listing())
            .service(fs::Files::new("/scripts", "./dist/scripts/").show_files_listing())
            .route("/", web::get().to(index))
        )
        .listen(listener)?
        .run();
    Ok(server)
}

async fn index() -> HttpResponse {
    let source = read_to_string("./dist/index.js").expect("File not found");

    let body = once(ok::<_, Error>(web::Bytes::from(Ssr::render_to_string(
        &source, "SSR", None,
    ))));

    HttpResponse::build(StatusCode::OK)
        .content_type("text/html; charset=utf-8")
        .streaming(body)
}
