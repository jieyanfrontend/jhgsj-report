let { prevRouter} = require('../config/router');
let pool = require('../config/mysql');
prevRouter.post('/addCheck',async (ctx, next) => {
    const query = ctx.request.body;
    let requiredParams = ['name', 'register_code', 'admin', 'address', 'phone', 'code'];
    let ret = {};
    requiredParams.forEach(param => {
        if(!query[param]){
            ret.errcode = 3001;
            ret.errMsg = '缺少必需参数：' + param;
            ctx.body = ret;
        }
    });
    if(!ret.errcode){
        await pool.getConnection(async function(err, connection){
            if(err) throw err;
            let keys = ['name', 'register_code', 'admin', 'address', 'phone'];
            let values = keys.map(k => {
                return JSON.stringify(encodeURI(query[k]));
            });
            let sql = `INSERT INTO checklist (${keys.toString()}) VALUES (${values.toString()})`;
            await connection.query(sql, (err, result) => {
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
                ctx.body = ret;
            });
        });
    }
});