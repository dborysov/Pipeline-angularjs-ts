'use strict';

const gulp = require('gulp');
const path = require('path');
const config = require('../../config');

gulp.task('copy-libs', () => {
    const libs = config.src.js.libs.concat(config.src.css.libs).map(filePath => path.join(config.folderNames.nodeModules, filePath));
    const dest = path.join(config.baseDir.dest, config.folderNames.outputLibs);

    return gulp.src(libs, { base: config.folderNames.nodeModules })
               .pipe(gulp.dest(dest))
});