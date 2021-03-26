# KrakenNest
<p align="center"><img src="./logo.png"></p>

### Project specific ReadMe
The core of the libs/kraken.ts file is based on work from https://github.com/nothingisdead/npm-kraken-api

The remainder of the project was scaffolded with Nx which you can read about in the Auto generated readMe at the bottom of this file.

This is a mono repo with an Ionic/Angular/Capacitor front-end. The back-end currently supports the Kraken API. In the future this may get extended to support other APIs.

USE AT YOUR OWN RISK! No warranty is implied or intended.

I started this project as a way to explore Nx tools, monorepos, NestJS, and API implementations. I also just like the Ionic framework for its dead simple basics and 
reasonable ease of extension into hybrid and PWA. 

As it evolves I hope to use it as a "local to my personal computer only" trading platform to solve some of the problems related to trading bots observing trading data on a platform in order to 
manipulate and profit from such trades. If your trade triggers are local/private, the bots are denied this info.

The front-end is simple enough to start with `nx serve`

The back-end is also pretty easy. Just use `nx start api`. You will then be asked for your key and secret.
I set it up this way so that these are not stored anywhere in the code or project. On my personal system I have these 
stored in an encrypted PDF. At start up I enter these via cut and paste inputs rather than passing via command line. The reason being if they were 
passed on the command line it would defeat the purpose since they would then be visible on the history log.  

This probably wouldn't stop a "state sponsored" hacker that manages to steal my computer, but it should be good enough to slow down the after smash and grab thief while I go to the local library and revoke my keys.


#### Auto generated readme below

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@kraken-nest/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
