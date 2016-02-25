var gulp        = require('gulp');
var htmlConfig  = require('../config').html;

gulp.task('html', function() {
  gulp.src(htmlConfig.src)
    .pipe(gulp.dest(htmlConfig.dest));
});
