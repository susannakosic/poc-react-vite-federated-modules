# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `app` (react based) depends on a component exposed by `shared` app (react based).

## Running

First, run `yarn`, then `yarn build` and `yarn serve`. This will build and serve both `shared` and `app` on ports 5000, 5001 respectively.

- HOST (shared): [localhost:5000](http://localhost:5000/)
- REMOTE (app): [localhost:5001](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `yarn stop` to stop all services.

## CI pipeline

The CI pipeline is configured to filter changes and selectively build and deploy packages to AWS S3.  

## Demo

[federated-module-host-app.s3.eu-west-3.amazonaws.com](https://federated-module-host-app.s3.eu-west-3.amazonaws.com/index.html)


---

[WIP]
## How to add a new federated module

1. Create the new package using the vite template
$ cd packages
$ yarn create vite newpackagename --template react-ts

2. Setup new package as a federated module
2.1 Add the following to the new package's `vite.config.js` file
2.2 Add the following to the host `package.json` file

3. Setup remote host / AWS S3 bucket
3.1 Create a new S3 bucket and configure it as a static website with GET access policies
3.2 Setup CORS configuration allowing access from the host app

