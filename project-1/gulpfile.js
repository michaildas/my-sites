const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

gulp.task('compile sass', function () {
    gulp.src('sass/main.scss')
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.run('compile sass');
    gulp.watch('sass/**',['compile sass']);
});