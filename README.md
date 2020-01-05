# angular-serverless-starter

The project intend to help people seeking for the help in setting up serverless application on Angular Universal.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/browser` directory. Use the `--prod` flag for a production build.

## Build SSR
Run `npm run build:ssr` to build the Angular Universal. The build artifacts will be stored in `dist/server` and It will also generate the server side file `dist/server.js`.

## Serve SSR
Run `npm run serve:ssr` to serve the Angular Universal over AWS Lambda simulated using "Serverless framework".

## Deploy on Serverless
Run `npm run deploy` to deploy an application on Lambda. Be sure to install and configure AWS CLI before hitting this command.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help, please contact raise a issue / question in this git repository.
