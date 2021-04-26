const { src, task, dest, parallel, watch } = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function styles() {
    return src('./less/*.less')
        .pipe(less())
        .pipe(dest('./css'));
}

function transpile() {
    return src('./src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('build.js'))
        .pipe(dest('./dist'));
}

function watchJS() {
    watch(['./src/*.js'], transpile);
}

task('styles', styles);
task('transpile', transpile);

task('build', parallel(styles, transpile));
task('watch:js', watchJS);
