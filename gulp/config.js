'use strict';

const path = require('path');

const baseDir = {
    dest: 'dist',
    src: 'app'
};
const folderNames = {
    nodeModules: 'node_modules',
    outputCss: 'css',
    outputLibs: 'libs',
    partials: 'partials',
    tests: 'tests'
};
const fileNames = {
    outputJs: 'all.js',
    templatesJs: 'templates.js',
    indexHtml: 'index.html'
};
const moduleNames = {
    app: 'app'
};
const src = {
    ts: {
        customMainFiles: [
            `./${baseDir.src}/main.ts`,
            `./${baseDir.src}/{controllers,services}/${'*.ts'}`
        ]
    },
    js: {
        libs: [
            'angular/angular.min.js',
            'angular-ui-router/release/angular-ui-router.min.js'
        ],
        unitTestLibs: [path.resolve('node_modules/angular-mocks/angular-mocks.js')],
        unitTestSpecs: [path.resolve(folderNames.tests, 'unit/**/*.js')],
        e2eSpecs: [path.resolve(folderNames.tests, 'e2e/**/*.js')]
    },
    css: {
        libs: ['bootstrap/dist/css/bootstrap.min.css']
    },
    sass: {
        custom: [`./${baseDir.src}/Content/Sass/+(*.sass|*.scss)`]
    },
    html: {
        main: `./${baseDir.src}/index.html`,
        partials: [`./${baseDir.src}/${folderNames.partials}/${'*.html'}`]
    },
    configs: {
        karma: path.resolve(folderNames.tests, 'karma.conf.js'),
        protractor: path.resolve(folderNames.tests, 'protractor.conf.js')
    },
    get unitTestFiles() {
        const mainLibs = src.js.libs.map(lib => path.resolve(folderNames.nodeModules, lib));
        const customFiles = [fileNames.outputJs, fileNames.templatesJs].map(file => path.resolve(baseDir.dest, file));
        const testLibs = src.js.unitTestLibs;
        const specs = src.js.unitTestSpecs;
        return [
            ...mainLibs,
            ...customFiles,
            ...testLibs,
            ...specs
        ];
    }
};
const taskConfigs = {
    compileTemplates: {
        minify: {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true
        },
        moduleName: moduleNames.app,
        output: fileNames.templatesJs,
        strip: folderNames.partials
    }
};
const rootPath = path.resolve(__dirname, '..');
const rootUrl = 'http://localhost:801';

module.exports = {
    baseDir,
    folderNames,
    fileNames,
    moduleNames,
    src,
    taskConfigs,
    rootPath,
    rootUrl
};