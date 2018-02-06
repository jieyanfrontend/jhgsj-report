let { prevRouter } = require('../config/router');
let pool = require('../config/mysql');
let upload = require('../utils/upload')('license');
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense', upload.any() , (ctx, next) => {
    let req = ctx.req;
    let requireParams = ['id', 'picture'];
    let query = {
        id: req.body.id,
        picture: req.files && req.files.length && req.files[0].fieldname
    };
    let ret = checkRequireParams(requireParams, query);
    if(!ret.errcode){
        pool.getConnections((err, connection) => {
            let sql = `UPDATE checklist SET license_img='https://www.lifuzhao100.cn/images/license/license-${query.id}'`;
            connection.query()
        });
    }else{
        ctx.body = ret;
    }
});