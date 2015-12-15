'use strict';

const gulp = require('gulp');

gulp.task('test-ci', ['e2e', 'unit-test-ci']);