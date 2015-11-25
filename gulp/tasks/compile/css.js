'use strict';

const gulp = require('gulp'),
      path = require('path'),
      sass = require('gulp-sass'),
      config = require('../../config');

gulp.task('compile-css', () =>
    gulp.src(config.src.sass.custom)
        .pipe(sass())
        .pipe(gulp.dest(path.join(config.baseDir.dest, 'css'))));