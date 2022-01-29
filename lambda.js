const serverlessExpress = require("@vendia/serverless-express");
const app = require("./dist/ngx-serverless-starter/serverless/main").server;

module.exports.handler = serverlessExpress({
  app,
  // binarySettings: {
  //   isBinary: ({ headers }) => true,
  //   contentTypes: [],
  //   contentEncodings: [],
  // },
});