const fs = require('fs');
const { resolve } = require('path');
const Router = require('koa-router');

const router = new Router({
    prefix: '/api'
});
module.exports.prevRouter = router;
fs.readdirSync(resolve(__dirname, 'routes')).map(route => {
    require(resolve(__dirname, 'routes/' + route));
});
module.exports.nextRouter = router;

