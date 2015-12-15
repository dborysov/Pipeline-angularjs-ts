'use strict';

const startTests = require('./startTests');
const gulp = require('gulp');
const config = require('../../../config');

gulp.task('unit-test-watch', ['default'], cb => {
    const karmaConfig = {
        files: config.src.unitTestFiles,
        autoWatch: true,
        singleRun: false
    };

    startTests(karmaConfig, cb);
});