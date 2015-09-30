'use strict'

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'))
});

gulp.task('sass:watch', function() {
  gulp.watch('./style/*.scss', ['sass'])
})

gulp.task('default', ['sass:watch']);
