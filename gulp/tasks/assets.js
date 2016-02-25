var gulp          = require('gulp');
var distConfig    = require('../config').dist;

gulp.task('assets', function() {
  gulp.src(distConfig.src + '/assets/**')
    .pipe(gulp.dest(distConfig.dest + '/assets/'));
});
