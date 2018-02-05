const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const enforceHttps = require('koa-sslify');
const fs = require('fs');
const { resolve } = require('path');
const http = require('http');
const https = require('https');
const { nextRouter } = require('./config/router');
const app = new Koa();
app
    .use(enforceHttps())
    .use(bodyParser())
    .use((ctx, next) => {
        console.log(ctx.request.url);
        next();
    })
    .use(nextRouter.routes())
    .use(nextRouter.allowedMethods());
const options = {
    key: fs.readFileSync(resolve(__dirname, './ssl/2_lifuzhao100.cn.key')),
    cert: fs.readFileSync(resolve(__dirname, './ssl/1_lifuzhao100.cn_bundle.crt'))
};
http.createServer( app.callback() ).listen(80);
https.createServer( options, app.callback()).listen(443);