let { prevRouter } = require('../config/router');
let Busboy = require('busboy');
let fs = require('fs');
let { resolve } = require('path');
let pool = require('../config/mysql');
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense', async (ctx, next) => {
    console.log(ctx.request);
    let busboy = new Busboy({
        header: ctx.req.header
    });
    busboy.on('file', (fieldName, file, fileName, encoding, mimeType) => {
        console.log(fieldName);
        file.on('data', (data) => {
            fs.createWriteStream(resolve(__dirname, ))
        });
        file.on('end', () => {

        });
    });
    this.request.pipe(busboy);
});