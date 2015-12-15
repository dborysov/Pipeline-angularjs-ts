/* global process */
'use strict';

const gulp = require('gulp');
const karma = require('karma');
const config = require('../../config');
const karmaParseConfig = require('karma/lib/config').parseConfig;

gulp.task('test-watch', ['default'], cb => {
    const karmaConfig = karmaParseConfig(config.src.configs.karma, {
        files: config.src.testFiles,
        autoWatch: true,
        singleRun: false
    });

    const server = new karma.Server(karmaConfig, exitCode => {
        cb();
        process.exit(exitCode);
    });

    server.start();
});