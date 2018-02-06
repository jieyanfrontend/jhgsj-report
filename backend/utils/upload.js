let multer = require('koa-multer');
let { existsSync, mkdirSync } = require('fs');
let { resolve, extname } = require('path');
function upload(kind) {
    let storage = multer.diskStorage({
        destination: function(req, file, cb){
            let uploadPath = resolve(__dirname, `../../public/${kind}`);
            if(!existsSync(uploadPath)){
                mkdirSync(uploadPath);
            }
            cb(null, uploadPath)
        },
        filename: function(req, file, cb){
            let id = req.body.id;
            let ext = extname(file.originalname);
            console.log(ext);
            cb(null, `${kind}-` + id + ext);
        }
    });
    return multer({
        storage: storage
    });
}
module.exports = upload;