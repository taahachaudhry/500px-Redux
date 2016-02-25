var src = './src';
var dist = './dist';

module.exports = {
  connect: {
    root: dist,
    port: '3000',
    livereload: true
  },
  html: {
    src: src + '/index.html',
    dest: dist
  },
  scss: {
    src: src + '/scss/**/*.scss',
    dest: dist + '/css',
    lint: '.scss-lint.yml',
    autoprefixer: {
      browsers: ['last 2 versions', 'IE 9']
    }
  },
  browserify: {
    src: src + '/js/app.jsx',
    dest: dist + '/js/',
    bundle: 'main.js'
  },
  dist: {
    src: src,
    dest: dist
  }
}
