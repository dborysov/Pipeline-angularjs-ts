'use strict';

const gulp = require('gulp'),
      path = require('path'),
      inject = require('gulp-inject'),
      config = require('../config');

gulp.task('inject-html', ['bower-install', 'compile-js', 'compile-css', 'compile-templates', 'copy-libs'], () => {
    var sourceFiles = gulp.src(config.src.js.libs.concat(config.src.css.libs).map(path => path.replace('./bower_components/', `${config.baseDir.dest}/libs/`))
                          .concat(path.join(config.baseDir.dest, 'all.js'))
                          .concat(path.join(config.baseDir.dest, 'templates.js'))
                          .concat(path.join(config.baseDir.dest, 'css', '*.css')), { read: false });

    return gulp.src(config.src.html.main)
               .pipe(inject(sourceFiles, {ignorePath: `../${config.baseDir.dest}`, relative: true}))
               .pipe(gulp.dest(config.baseDir.dest));
});