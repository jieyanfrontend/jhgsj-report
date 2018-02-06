let { prevRouter} = require('../config/router');
let pool = require('../config/mysql');
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/check/add',async (ctx, next) => {
    const query = ctx.request.body;
    let requiredParams = ['org_name', 'register_code', 'admin', 'address', 'phone', 'code'];
    let ret = checkRequireParams(requiredParams, query);
    if(!ret.errcode){
        let searchDatabase = async () => {
            return new Promise((resolve, reject) => {
                pool.getConnection((err, connection) => {
                    if(err) throw err;
                    let keys = ['org_name', 'register_code', 'admin', 'address', 'phone'];
                    let values = keys.map(k => {
                        return JSON.stringify(encodeURI(query[k]));
                    });
                    let sql = `INSERT INTO checklist (${keys.toString()}) VALUES (${values.toString()})`;
                    connection.query(sql, (err, result) => {
                        connection.release();
                        if(err) {
                            ret.errcode = 5000;
                            ret.errMsg = err;
                            throw err;
                        }else{
                            ret.errcode = 0;
                            ret.errMsg = '成功';
                            ret.data = {
                                id: result.insertId
                            }
                        }
                        resolve(ret);
                    });
                })
            })
        };

        ctx.body = await searchDatabase();
    }else{
        ctx.body = ret;
    }
});