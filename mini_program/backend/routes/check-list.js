let { prevRouter } = require('../config/router');
let pool = require('../config/mysql');
prevRouter.post('/check/list', async (ctx, next) => {
    let ret = {};
    let searchDatabase = () => {
        return new Promise((resolve, reject) => {
            pool.getConnection((conErr,connection) => {
                if(conErr){
                    ret.errcode = 5000;
                    ret.errMsg = conErr;
                    reject(ret);
                }
                connection.query(`SELECT * FROM checklist ORDER BY id DESC`, (queryErr, result) => {
                    connection.release();
                    if(queryErr){
                        ret.errcode = 6000;
                        ret.errMsg = queryErr;
                        reject(ret);
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
});