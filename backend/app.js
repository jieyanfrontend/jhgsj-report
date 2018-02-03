const Koa = require('koa');
const https = require('https');
const { nextRouter } = require('./router');
const app = new Koa();

app
    .use(nextRouter.routes())
    .use(nextRouter.allowedMethods());
https.createServer(app.callback()).listen(80);