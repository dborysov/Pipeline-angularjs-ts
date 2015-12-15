/* global process */
'use strict';

const gulp = require('gulp');
const path = require('path');
const karma = require('karma');
const karmaParseConfig = require('karma/lib/config').parseConfig;

gulp.task('test', ['default'], (cb) => {
    const configFilePath = path.resolve('karma.conf.js');

    var config = karmaParseConfig(configFilePath, {});

    var server = new karma.Server(config, function (exitCode) {
        cb();
        process.exit(exitCode);
    });

    server.start();
});