use server::run::run;
use std::net::TcpListener;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    
    let address = format!("127.0.0.1:{}", 8080);
    let listener = TcpListener::bind(address)?;

    run(listener)?.await
}
