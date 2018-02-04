const Koa = require('koa');
const enforeHttps = require('koa-sslify');
const fs = require('fs');
const http = require('http');
const https = require('https');
const { nextRouter } = require('./router');
const app = new Koa();

app
    .use(enforeHttps())
    .use(nextRouter.routes())
    .use(nextRouter.allowedMethods());
const options = {
    key: fs.readdirSync('./ssl/2_lifuzhao100.cn.key'),
    cert: fs.readdirSync('./ssl/1_lifuzhao100.cn_bundle.crt')
};
http.createServer( app.callback() ).listen(80);
https.createServer( options, app.callback()).listen(443);