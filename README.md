# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `app` (react based) depends on a component exposed by `shared` app (react based).

## Running

First, run `yarn`, then `yarn build` and `yarn serve`. This will build and serve both `shared` and `app` on ports 5000, 5001 respectively.

- HOST (shared): [localhost:5000](http://localhost:5000/)
- REMOTE (app): [localhost:5001](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `yarn stop` to stop all services.

## CI pipeline

The CI pipeline is configured to detect file changes and run `yarn build` only on packages that have changed. 

## Demo

[federated-module-host-app.s3.eu-west-3.amazonaws.com](https://federated-module-host-app.s3.eu-west-3.amazonaws.com/index.html)