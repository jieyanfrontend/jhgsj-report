
let { prevRouter } = require('../config/router');
let pool = require('../config/mysql');
let uploadType = require('../config/CONSTANT').PREMISE;
let upload = require('../utils/upload')(uploadType);
let checkRequireParams = require('../utils/checkRequireParams');
let { extname } = require('path');
prevRouter.post('/upload/premise', upload.any() ,async (ctx, next) => {
    let {body, files} = ctx.req;
    let id = body.id,
        file = files && files.length && files[0] || {},
        ext = extname(file.originalname);
    let requireParams = ['id', 'picture'];
    let query = {
        id: id,
        picture: file.fieldname
    };
    let ret = checkRequireParams(requireParams, query);
    if (!ret.errcode) {
        let searchDatabase = () => {
            return new Promise((resolve, reject) => {
                pool.getConnection((err, connection) => {
                    let sql = `UPDATE checklist SET ${uploadType}_img='images/${uploadType}/${uploadType}-${id}${ext}' where id=${id}`;
                    console.log(sql);
                    connection.query(sql, (err, result) => {
                        connection.release();
                        if (err) {
                            ret.errcode = 5000;
                            ret.errMsg = err;
                            reject(err);
                        } else {
                            ret.errcode = 0;
                            ret.errMsg = '成功';
                        }
                        resolve(ret);
                    });
                });
            })
        };
        ctx.body = await searchDatabase();
    } else {
        ctx.body = ret;
    }
});