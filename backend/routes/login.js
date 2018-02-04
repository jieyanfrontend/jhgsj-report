const request = require('request');
const { prevRouter } = require('../config/router');
prevRouter.get("/user/login", (ctx, next) => {
    const { js_code } = ctx.request.query;
    let ret = {};
    if(!js_code){
        ret = {
            errcode: 2001,
            errMsg: "缺少必需参数js_code"
        };
        ctx.body = ret;
    }else{
        request.get(`https://api.weixin.qq.com/sns/jscode2session?appid=wx4988115d181e147a&secret=97a523754f2b943ac52da680a9fd5bbe&grant_type=authorization_code&js_code=${js_code}`, (err, res, body) => {
            console.log(body);
            ctx.body = body;
        })
    }
});