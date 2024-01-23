const { src, dest } = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');


function HtmlTask() {
    return src('./src/*.html').pipe(fileInclude({
        prefix: '@@'
    }))
    .pipe(dest('dist'));
}
function styleTask() {
    return src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('dist/css'))
    .pipe(rename({suffix: '.min'}));
}


function JsTask() {
    return src('main.js')
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(rename({suffix: '.min'}));
}

exports.HtmlTask = HtmlTask;
exports.styleTask = styleTask;
exports.JsTask = JsTask;