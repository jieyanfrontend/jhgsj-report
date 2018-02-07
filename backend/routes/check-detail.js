let {prevRouter} = require('../config/router');
let pool = require('../config/mysql');
let checkRequireParams = require('../utils/checkRequireParams');

prevRouter.post('/check/detail', async (ctx, next) => {
    const query = ctx.request.body;
    let requiredParams = ['id'];
    let ret = checkRequireParams(requiredParams, query);
    if(!ret.errcode){
        let searchDatabase = () => {
            return new Promise((resolve, reject) => {
                pool.getConnection((conErr,connection) => {
                    if(conErr){
                        ret.errcode = 5000;
                        ret.errMsg = conErr;
                        throw conErr;
                    }
                    connection.query(`SELECT * FROM checklist where id=${parseInt(query["id"])}`, (queryErr, result) => {
                        if(queryErr){
                            ret.errcode = 6000;
                            ret.errMsg = queryErr;
                            throw queryErr;
                        }
                        ret.errcode = 0;
                        ret.errMsg = '成功';
                        ret.data = result;
                        resolve(ret);
                    })
                });
            });
        };
        ctx.body = await searchDatabase();
    }else{
        ctx.body = ret;
    }
});