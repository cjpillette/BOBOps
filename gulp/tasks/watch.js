var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "public"
    }
  });

  watch('./public/index.html', function() {
    browserSync.reload();
  });

  watch('./public/css/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./public/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
