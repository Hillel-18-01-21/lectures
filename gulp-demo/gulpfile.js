const { src, task, dest } = require('gulp');
const less = require('gulp-less');

function styles() {
    return src('./less/*.less')
        .pipe(less())
        .pipe(dest('./css'));
}

task('styles', styles);