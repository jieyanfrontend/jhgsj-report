module.exports = (requireParams, queryParams) => {
    let ret = {};
    requireParams.forEach(param => {
        if(!queryParams[param]){
            ret.errcode = 3001;
            ret.errMsg = '缺少必需参数: ' + param;
        }
    });
    return ret;
};