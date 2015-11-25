'use strict';

const dest = 'dist',
      src = 'app',
      bower = 'bower_components';

module.exports = {
    src: {
        ts: {
            customMainFiles: [
                `./${src}/main.ts`,
                `./${src}/{controllers,services}/${'*.ts'}`
            ]
        },
        js: {
            libs: [
                `./${bower}/angular/angular.min.js`,
                `./${bower}/angular-ui-router/release/angular-ui-router.min.js`
            ]
        },
        css: {
            libs: [`./${bower}/bootstrap/dist/css/bootstrap.min.css`],
        },
        sass: {
            custom: [`./${src}/Content/Sass/+(*.sass|*.scss)`]
        },
        html: {
            main: `./${src}/index.html`,
            partials: [`./${src}/partials/${'*.html'}`]
        }
    },
    baseDir: {dest, src}
};