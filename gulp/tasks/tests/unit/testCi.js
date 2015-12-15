'use strict';

const startTests = require('./startTests');
const gulp = require('gulp');
const config = require('../../../config');

gulp.task('unit-test-ci', ['default'], cb => {
    const karmaConfig = {
        files: config.src.unitTestFiles,
        autoWatch: false,
        singleRun: true
    };

    startTests(karmaConfig, cb);
});