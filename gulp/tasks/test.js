/* global process */
'use strict';

const gulp = require('gulp');
const karma = require('karma');
const config = require('../config');
const karmaParseConfig = require('karma/lib/config').parseConfig;

gulp.task('test', ['default'], cb => {
    const karmaConfig = karmaParseConfig(config.src.configs.karma, { files: config.src.testFiles });

    const server = new karma.Server(karmaConfig, exitCode => {
        cb();
        process.exit(exitCode);
    });

    server.start();
});