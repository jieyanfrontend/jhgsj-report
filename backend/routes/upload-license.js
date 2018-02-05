let { prevRouter } = require('../config/router');
let Busboy = require('busboy');
let fs = require('fs');
let { resolve } = require('path');
let pool = require('../config/mysql');
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense', (ctx, next) => {
    console.log(ctx.req.headers);
    let busboy = new Busboy({
        headers: ctx.req.headers
    });
    busboy.on('file', (fieldName, file, fileName, encoding, mimeType) => {
        console.log("fieldName", fieldName);
    });
    busboy.on('field', (fieldName, value, fieldNameTruncated, valueTruncated) => {
        console.log("fieldName: ", fieldName);
        console.log("value: ", value);
    });
    ctx.req.pipe(busboy);
});