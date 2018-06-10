var gulp = require('gulp');
var uglify = require('gulp-uglify');

// file paths
var SCRIPTS_PATH = 'public/scripts/**/*.js';


gulp.task('styles', function(){
  console.log('starting styles task');
})

gulp.task('scripts', function(){
  console.log('starting scripts task')

  return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
})

gulp.task('images', function (){
  console.log('starting images task');
})

gulp.task('default', function(){
  console.log('default task starting');
})

gulp.task('watch', function(){
  console.log('watch task started');
  require('./server.js');
  gulp.watch(SCRIPTS_PATH, ['scripts']);
})
