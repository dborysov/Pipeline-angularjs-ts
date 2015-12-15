'use strict';

const startTests = require('./startTests');
const gulp = require('gulp');
const config = require('../../config');

gulp.task('test-watch', ['default'], cb => {
    const karmaConfig = {
        files: config.src.testFiles,
        autoWatch: true,
        singleRun: false
    };

    startTests(karmaConfig, cb);
});