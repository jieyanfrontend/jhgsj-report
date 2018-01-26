let fs = require('fs');
let gulp = require('gulp');
let babel = require('gulp-babel');
let less = require('gulp-less');
let postcss = require('gulp-postcss');
let rename = require('gulp-rename');
let autoprefixer = require('autoprefixer');
let jsonMinify = require('gulp-jsonminify');
gulp.task('default', ['wxml', 'json', 'wxss', 'js', 'resource']);

gulp.watch('src/**/*', ['default']);
gulp.task('json', function(){
    gulp.src(['src/**/*.json', '!src/resource.json'])
        // .pipe(jsonMinify())
        .pipe(gulp.dest('dist'));
});
gulp.task('wxml', () => {
    gulp.src('src/**/*.@(wxml|html)')
        .pipe(rename({extname: ".wxml"}))
        .pipe(gulp.dest('dist'));
});
gulp.task('wxss', () => {
    // wxssProcess(['src/app.wxss', 'src/@(pages)/**/*.wxss']);
    wxssProcess('src/**/*.@(wxss|css)');
});
gulp.task('js', () => {
    gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
gulp.task('resource', () => {
    let resourcePath = './src/resource.json';
    if(fs.existsSync(resourcePath)){
        let resource = require(resourcePath);
        let weui = resource['weui'];
        // if(weui && weui instanceof Array){
            let index = weui.indexOf('weui');
            if(index !== -1){
                weui.splice(index, 1);
                wxssProcess('./node_modules/weui-wxss/dist/style/weui.wxss', {
                    base: 'node_modules/weui-wxss/dist/'
                });
            }
            let restWeui = weui.map(item => {
                return './node_modules/weui-wxss/dist/style/widget/weui-button/weui-button.wxss';
            });
            wxssProcess(restWeui, {
               base: 'node_modules/weui-wxss/dist/'
            }, {
                dirname: "style"
            });
        // }
    }
});

function wxssProcess(src, options, renameOptions){
    options = options || {};
    renameOptions = renameOptions || {};
    gulp.src(src, options)
        .pipe(less())
        .pipe(postcss([autoprefixer(['iOS >= 8', 'Android >= 4.1'])]))
        .pipe(rename(Object.assign({extname: ".wxss"}, renameOptions)))
        .pipe(gulp.dest('dist'))
}