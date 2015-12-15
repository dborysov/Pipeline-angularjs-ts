/* global process */
'use strict';

const gulp = require('gulp');
const path = require('path');
const karma = require('karma');
const config = require('../config');
const karmaParseConfig = require('karma/lib/config').parseConfig;

gulp.task('test', ['default'], cb => {
    const configFilePath = path.resolve('karma.conf.js');
    const mainLibs = config.src.js.libs.map(lib => path.join(config.folderNames.bower, lib));
    const customFiles =[config.fileNames.outputJs, config.fileNames.templatesJs].map(file => path.join(config.baseDir.dest, file));
    const testLibs = config.src.js.testLibs;
    const specs = config.src.js.testSpecs;

    const karmaConfig = karmaParseConfig(configFilePath, {files: [
                ...mainLibs,
                ...customFiles,
                ...testLibs,
                ...specs
            ]
        });

    const server = new karma.Server(karmaConfig, exitCode => {
        cb();
        process.exit(exitCode);
    });

    server.start();
});