const serverlessExpress = require("@vendia/serverless-express");
const app = require("./dist/ngx-serverless-starter/serverless/main");

const serverProxy = serverlessExpress.createServer(app.server);
module.exports.handler = (event, context) => serverlessExpress.proxy(serverProxy, event, context);
