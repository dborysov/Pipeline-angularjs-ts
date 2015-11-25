'use strict';

const gulp = require('gulp'),
      templateCache = require('gulp-templatecache'),
      uglify = require('gulp-uglify'),
      config = require('../../config');

gulp.task('compile-templates', () =>
    gulp.src(config.src.html.partials)
        .pipe(templateCache(config.taskConfigs.compileTemplates))
        .pipe(uglify())
        .pipe(gulp.dest(config.baseDir.dest))
);