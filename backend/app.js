const Koa = require('koa');
const { nextRouter } = require('./router');
const app = new Koa();

app
    .use(nextRouter.routes())
    .use(nextRouter.allowedMethods());
app.listen(3000);