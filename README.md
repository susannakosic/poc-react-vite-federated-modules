# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. 
`app` (react js) depends on `shared` package (react js) and `contenfully` package (react ts).

## Running

First, run `yarn`, then `yarn build` and `yarn serve`. This will build and serve both `shared` and `app` on ports 5000, 5001 respectively.

- app (host): [localhost:5001](http://localhost:5001/)
- shared (remote): [localhost:5000](http://localhost:5000/)
- contentfully (remote): [localhost:5002](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `yarn stop` to stop all services.

## CI pipeline

The CI pipeline is configured to filter changes and selectively build and deploy packages to AWS S3.  

## Demo

[federated-module-host-app.s3.eu-west-3.amazonaws.com](https://federated-module-host-app.s3.eu-west-3.amazonaws.com/index.html)


---

[WIP] below docs are not yet complete
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

4. Setup package build pipeline
3.1 Add mapping to circle ci config.yml
3.2 Add build and deploy jobs to circle ci continue-config.yml

