let Koa = require('koa');
let static = require('koa-static');
let app = new Koa();
app.use(static(__dirname + '/dist'));
app.listen(8000);