let router = require('../config/router');
let pool = require('../config/mysql');
router.post('/check/list', async (ctx, next) => {
    let ret = {};
    let searchDatabase = () => {
        return new Promise((resolve, reject) => {
            pool.getConnection((conErr,connection) => {
                if(conErr){
                    ret.errcode = 5000;
                    ret.errMsg = conErr;
                    throw conErr;
                }
                connection.query(`SELECT * FROM checklist`, (queryErr, result) => {
                    if(queryErr){
                        ret.errcode = 6000;
                        ret.errMsg = queryErr;
                        throw queryErr;
                    }
                    ret.errcode = 0;
                    ret.errMsg = '成功';
                    ret.data = result;
                })
            });
        });
    };
    ctx.body = await searchDatabase();
});