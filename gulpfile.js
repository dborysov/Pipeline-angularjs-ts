'use strict';

const gulp = require('gulp'),
      path = require('path'),
      requireDir = require('require-dir'),
      del = require('del'),
      config = require('./gulp/config');

requireDir('./gulp/tasks', {recurse: true});

gulp.task('default', ['inject-html']);