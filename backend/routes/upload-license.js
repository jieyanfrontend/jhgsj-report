let { prevRouter } = require('../config/router');
let multer = require('koa-multer');
let pool = require('../config/mysql');
let { resolve } = require('path');
let upload = multer({
    dest:  resolve(__dirname, '../images/license')
});
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense', upload.array('file', 2) , (ctx, next) => {
    console.log("ctx", ctx);
    // console.log("file", ctx.file);
});