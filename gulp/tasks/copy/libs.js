'use strict';

const gulp = require('gulp'),
      path = require('path'),
      config = require('../../config');

gulp.task('copy-libs', () => {
    const libs = config.src.js.libs.concat(config.src.css.libs).map(filePath => path.join(config.folderNames.bower, filePath)),
          dest = path.join(config.baseDir.dest, config.folderNames.outputLibs);

    return gulp.src(libs, { base: config.folderNames.bower })
               .pipe(gulp.dest(dest))
});