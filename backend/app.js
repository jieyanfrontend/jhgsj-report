const Koa = require('koa');
const http = require('http');
const { nextRouter } = require('./router');
const app = new Koa();

app
    .use(nextRouter.routes())
    .use(nextRouter.allowedMethods());
http.createServer(app.callback()).listen(80);