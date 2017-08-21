const
  gulp = require('gulp'),
  typescript = require('gulp-tsc'),
  del = require('del'),
  nodemon = require('gulp-nodemon');

gulp.task('clean', function() {
  return del(['target']);
});

gulp.task('compile', function() {
  return gulp.src(['**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('target/'));
});

gulp.task('serve', ['clean', 'compile'], function() {
  nodemon({
    script: 'target/server.js',
    ext: 'ts html',
    env: {
      'NODE_ENV': 'development'
    },
    tasks: ['compile']
  });
});

gulp.task('default', ['clean', 'compile'], function() {
  // place code for your default task here
});
