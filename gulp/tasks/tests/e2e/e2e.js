'use strict';

const gulp = require('gulp');
const protractor = require('gulp-protractor').protractor;
const config = require('../../../config');

gulp.task('e2e', ['default'], () =>
    gulp.src(['test/e2e/*.js'])
        .pipe(protractor({
            configFile: config.src.configs.protractor
        }))
    );