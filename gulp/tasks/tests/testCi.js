'use strict';

const startTests = require('./startTests');
const gulp = require('gulp');
const config = require('../../config');

gulp.task('test-ci', ['default'], cb => {
    const karmaConfig = {
        files: config.src.testFiles,
        autoWatch: false,
        singleRun: true
    };

    startTests(karmaConfig, cb);
});