
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  gulp
    .src(['high.less'])
    .pipe(less())
    .pipe(gulp.dest('./'))
    ;
});

gulp.task('watch', function() {
  gulp.watch(['*.less'], ['less']);
});

gulp.task('default', ['watch']);
