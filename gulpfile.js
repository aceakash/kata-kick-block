var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  return gulp.src('*.spec.js')
    .pipe(jasmine());
});

gulp.task('watch', function () {
  gulp.watch('*.js', ['test']);
});

gulp.task('default', ['watch']);
