var gulp    = require('gulp');
var watch   = require('gulp-watch');  // eslint-disable-line no-unused-vars
var config  = require('../config');


gulp.task('default', ['connect', 'scss', 'html', 'assets', 'browserify', 'eslint'], function() {
  gulp.watch(config.scss.src, ['scss']);
  gulp.watch(config.html.src, ['html']);
});
