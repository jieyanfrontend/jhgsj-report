let { prevRouter } = require('../config/router');
let parse = require('co-busboy');
let fs = require('fs');
let { resolve } = require('path');
let pool = require('../config/mysql');
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense',  function *(ctx, next){
    let parts = parse(this),
        part;
    while (part = yield parts()){
        if(part.length){
            console.log('key:', part[0]);
            console.log('value:', part[1]);
        }else{
            part.pipe(fs.createWriteStream(resolve(__dirname, '../images/license.jpg')));
        }
    }
});