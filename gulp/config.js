'use strict';

const baseDir = {
    dest: 'dist',
    src: 'app'
},
    folderNames = {
        bower: 'bower_components',
        outputCss: 'css',
        outputLibs: 'libs',
        partials: 'partials'
    },
    fileNames = {
        outputJs: 'all.js',
        templatesJs: 'templates.js',
        indexHtml: 'index.html'
    },
    moduleNames = {
        app: 'app'
    },
    src = {
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
            testLibs: ['bower_components/angular-mocks/angular-mocks.js'],
            testSpecs: ['test/spec/**/*.js']
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
        }
    },
    taskConfigs = {
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

module.exports = {
    baseDir,
    folderNames,
    fileNames,
    moduleNames,
    src,
    taskConfigs
};