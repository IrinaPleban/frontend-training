const gulp = require('gulp');
const webpack = require('webpack-stream');
const webserver = require('gulp-webserver');

const webpackConfig = require('./webpack.config');

gulp.task('js', function () {
    return gulp.src('src/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('lib/'));
});

gulp.task('watch', function () {
    return gulp.watch('src/', ['js']);
});

gulp.task('webserver', ['js', 'watch'], function () {
    return gulp.src('./')
        .pipe(webserver({
            open: true
        }));
});
