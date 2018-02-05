let { prevRouter } = require('../config/router');
let parse = require('co-busboy');
let fs = require('fs');
let { resolve } = require('path');
let pool = require('../config/mysql');
let checkRequireParams = require('../utils/checkRequireParams');
prevRouter.post('/uploadLicense', async (ctx, next) => {
    let parts = parse(this),
        part;
    console.log(parts);
});