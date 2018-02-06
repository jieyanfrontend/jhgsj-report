
let { prevRouter } = require('../config/router');
let pool = require('../config/mysql');
let uploadType = require('../config/CONSTANT').WORKPLACE;
let upload = require('../utils/upload')(uploadType);
let checkRequireParams = require('../utils/checkRequireParams');
let { extname } = require('path');
prevRouter.post('/upload/workplace', upload.any() ,async (ctx, next) => {
    let {body, files} = ctx.req;
    let id = body.id,
        file = files && files.length && files[0] || {},
        ext = extname(file.originalname);
    let requireParams = ['id', 'picture'];
    let query = {
        id: id,
        picture: file.fieldname
    };

    let date = new Date();
    let post_time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    let status = Math.ceil(Math.random() * 4);
    let remarkList = ['经营许可证照片有误',"经营场所照片有误",'工作场所照片有误'];
    let remark = null;
    if(status === 2){
        remark = remarkList[Math.floor(Math.random() * 3)];
    }
    let ret = checkRequireParams(requireParams, query);
    if (!ret.errcode) {
        let searchDatabase = () => {
            return new Promise((resolve, reject) => {
                pool.getConnection((err, connection) => {
                    let sql = `UPDATE checklist SET ${uploadType}_img='images/${uploadType}/${uploadType}-${id}${ext}' remark="${remark}" status=${status} post_time="${post_time}" where id=${id}`;
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