'use strict';

const dest = './dist',
      src = './app';

module.exports = {
    src: {
        ts: {
            customMainFiles: [
                './app/main.ts',
                './app/controllers/*.ts',
                './app/services/*.ts'
            ]
        },
        js: {
            libs: [
                './bower_components/angular/angular.min.js',
                './bower_components/angular-ui-router/release/angular-ui-router.min.js'
            ]
        },
        css: {
            libs: ['./bower_components/bootstrap/dist/css/bootstrap.min.css'],
        },
        sass: {
            custom: ['./app/Content/Sass/+(*.sass|*.scss)']
        },
        html: {
            main: './app/index.html',
            partials: ['./app/partials/*.html']
        }
    },
    baseDir: {dest, src}
};