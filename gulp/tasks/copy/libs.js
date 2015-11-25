'use strict';

const gulp = require('gulp'),
      path = require('path'),
      config = require('../../config');

gulp.task('copy-libs', () => gulp.src(config.src.js.libs.concat(config.src.css.libs), {base: 'bower_components'}).pipe(gulp.dest(path.join(config.baseDir.dest, 'libs'))));