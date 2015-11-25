'use strict';

const gulp = require('gulp'),
      glob = require('glob'),
      browserify = require('browserify'),
      tsify = require('tsify'),
      source = require('vinyl-source-stream'),
      streamify = require('gulp-streamify'),
      sourcemaps = require('gulp-sourcemaps'),
      ngAnnotate = require('gulp-ng-annotate'),
      uglify = require('gulp-uglify'),
      config = require('../../config');

gulp.task('compile-js', () => {
    const filesToInject = config.src.ts.customMainFiles
                                       .reduce((prev, cur) => prev.concat(glob.sync(cur)), []);

    return browserify({ debug: true })
                .add(filesToInject)
                .plugin(tsify)
                .bundle()
                .pipe(source(config.fileNames.outputJs))
                .pipe(streamify(sourcemaps.init({ loadMaps: true })))
                    .pipe(ngAnnotate())
                    .pipe(streamify(uglify()))
                .pipe(streamify(sourcemaps.write()))
                .pipe(gulp.dest(config.baseDir.dest))
});