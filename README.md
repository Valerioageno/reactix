<div>
  <h1 align="center">Reactix</h1>
  <p align="center">🦾 React, Typescript and Rust 🦾</p>
</div>

<p align="center">
    <a href="https://github.com/Valerioageno/reactix/actions/workflows/main.yml" alt="Backend CI">
        <img src="https://github.com/Valerioageno/reactix/actions/workflows/main.yml/badge.svg" /></a>
    <a href="https://github.com/Valerioageno/reactix/actions/workflows/client.yml" alt="Frontend CI">
        <img src="https://github.com/Valerioageno/reactix/actions/workflows/client.yml/badge.svg" /></a>
</p>

This is a starting project that bind React (Typescript) frontend and Rust backend together. 

The repo already implement server side rendering and client side routing so you can start a new project working only on the frontend and deploying it; for the backend actix take care of it (one of the most fast web framework: <a href="https://www.techempower.com/benchmarks/#section=data-r20&hw=ph&test=fortune">source</a>).

It's also possible add other custom backend features working with Rust source.

A basic test suite, a prettier formatter, an eslint checker and a Github Action CI pipeline are already implemented for both the frontend and the backend.

<img src="./preview.gif" width="100%">

## Frontend dev mode

```shell
cd client/

npm i && npm run start
```

## Build and run

```shell
cd client/

npm i && npm run build

cd ..

cargo build --release

cargo run --release
```

## Deploy

For example with <a href="https://render.com/">render.com</a> full documentation (step by step) available <a href="https://render.com/docs/deploy-actix-todo">here</a>.

## Features

- [x] ReactJS typescript
- [x] Server side rendering
- [x] Actix backend
- [x] Routing

## Coming soon

- [ ] GraphQL

## Contributing

Any helps or suggestions will be appreciated.

## License

This project is licensed under the MIT License - see the LICENSE file for more information.
