/* global process */
'use strict';

const karma = require('karma');
const config = require('../../config');
const karmaParseConfig = require('karma/lib/config').parseConfig;

module.exports = (testConfig, cb) => {
    const karmaConfig = karmaParseConfig(config.src.configs.karma, testConfig);

    const server = new karma.Server(karmaConfig, exitCode => {
        cb();
        process.exit(exitCode);
    });

    server.start();
};