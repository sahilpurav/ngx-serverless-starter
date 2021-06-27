const awsServerlessExpress = require("aws-serverless-express");
const app = require("./dist/ngx-serverless-starter/serverless/main");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");


app.server.use(awsServerlessExpressMiddleware.eventContext());
const serverProxy = awsServerlessExpress.createServer(app.server);
module.exports.handler = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);
