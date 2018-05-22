'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');




// sass -> compile & copy from scss to css
gulp.task('sass', function() {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(autoprefixer())
      .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'))
});



// js -> concatenate from /js/scripts into scripts.min.js
gulp.task('scripts', function() {
  return gulp.src('assets/js/scripts/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'));
});


// gulp.task('scripts', function () {
//   // set up the browserify instance on a task basis
//   var b = browserify({
//     entries: './assets/js/scripts/app.js',
//     debug: true
//   });
//
//   return b.bundle()
//     .pipe(source('./scripts.min.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//         // Add transformation tasks to the pipeline here.
//         .pipe(uglify())
//         .on('error', gulplog.error)
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./assets/js/'));
// });

// vendor scripts
var vendorPaths = [
  'node_modules/angular/angular.js',
  'node_modules/angular-animate/angular-animate.js',
  'assets/js/vendor/diceroll.browser.js',
];
gulp.task('vendor-scripts', function() {
  return gulp.src(vendorPaths)
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('assets/js'));
});



// Watch task
gulp.task('default',['sass', 'scripts', 'watch']);

// Watch task
gulp.task('watch',function() {
  gulp.watch('assets/scss/**/*.scss',['sass']);
  gulp.watch('assets/js/scripts/**/*.js',['scripts']);
});
