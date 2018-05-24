'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');




// sass -> compile & copy from scss to css
gulp.task('sass', function() {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(rename({extname: '.min.css'}))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/css'))
});



// js -> concatenate from /js/scripts into scripts.min.js
gulp.task('scripts', function() {
  return gulp.src('assets/js/scripts/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/js'));
});


// vendor scripts
var vendorPaths = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-animate/angular-animate.min.js',
  'node_modules/mathjs/dist/math.min.js',
  'assets/js/vendor/diceroll.browser.js',
];
gulp.task('vendor-scripts', function() {
  return gulp.src(vendorPaths)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('vendor.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/js'));
});



// Default -> Build errythang
gulp.task('default',['sass', 'scripts', 'vendor-scripts']);

// Watch task
gulp.task('watch',function() {
  gulp.watch('assets/scss/**/*.scss',['sass']);
  gulp.watch('assets/js/scripts/**/*.js',['scripts']);
});
