let { prevRouter } = require('../config/router');
let Busboy = require('busboy');
let pool = require('../config/mysql');
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense', async (ctx, next) => {
    let query = ctx.request.body;
    console.log(query);
    let requireParams = ['picture'];
    let ret = checkRequireParams(requireParams, query);
    if(!ret.errcode){
        let busboy = new Busboy();
        busboy.on('file', (fieldName, file, fileName, encoding, mimeType) => {
            busboy.on('data', (data) => {
                console.log(data);
            });
            busboy.on('end', () => {
                console.log('end');
            })
        });
        ctx.req.pipe(busboy);
    }else{
        ctx.body = ret;
    }
});