var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(plumber())
        .pipe(sass({includePaths: ['src/sass']}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
    console.log(1234);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});