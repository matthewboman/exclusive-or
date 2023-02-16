// https://github.com/SergioBenitez/Rocket/blob/master/examples/static-files/src/main.rs

#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;

use rocket::fs::{FileServer, relative};

#[rocket::launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", FileServer::from(relative!("public")))
}