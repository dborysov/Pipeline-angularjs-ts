'use strict';

const gulp = require('gulp'),
      templateCache = require('gulp-templatecache'),
      config = require('../../config');

gulp.task('compile-templates', () => {
    const options = {
        moduleName: 'app',
        output: 'templates.js',
        strip: 'partials'
    };

    return gulp.src(config.src.html.partials)
               .pipe(templateCache(options))
               .pipe(gulp.dest(config.baseDir.dest));
});