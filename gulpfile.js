
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename"); 
var cssmin = require('gulp-cssmin');

gulp.task('less', function() {
  gulp
    .src(['src/index.less'])
    .pipe(less())
    .pipe(rename('high.css'))
    .pipe(gulp.dest('./'))
    .pipe(cssmin())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./'))
    ;
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.less'], ['less']);
});

gulp.task('default', ['less', 'watch']);
