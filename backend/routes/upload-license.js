let { prevRouter } = require('../config/router');
let multer = require('koa-multer');
let pool = require('../config/mysql');
let { resolve,extname  } = require('path');
let checkRequireParams = require('../utils/checkRequireParams');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, resolve(__dirname, '../images/license'))
    },
    filename: function(req, file, cb){
        let id = req.body.id;
        let ext = extname(file.originalname);
        cb(null, 'license-' + id + ext);
    }
});
let upload = multer({
    storage: storage
});
prevRouter.post('/uploadLicense', upload.any() , (ctx, next) => {
    let req = ctx.req;
    let requireParmas = ['id', 'picture'];
    let query = {
        id: req.body.id,
        picture: req.files[0].fieldname
    };
    let ret = checkRequireParams(requireParmas, query);
    if(!ret.errcode){

    }else{
        ctx.body = ret;
    }
});