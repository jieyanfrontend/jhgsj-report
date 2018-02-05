let { prevRouter } = require('../config/router');
let multer = require('koa-multer');
let pool = require('../config/mysql');
let { resolve } = require('path');
let upload = multer({
    dest:  resolve(__dirname, '../images/license')
});
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense', upload.single('picture', 1) , (ctx, next) => {
    console.log(ctx.file);
    console.log("file", ctx.req.files);
    // console.log("file", ctx.file);
});