var gulp             = require('gulp');
var connect          = require('gulp-connect');
var connectConfig    = require('../config').connect;

// Development Server
gulp.task('connect', function() {
  connect.server({
    root: connectConfig.root,
    port: connectConfig.port
  });
});
