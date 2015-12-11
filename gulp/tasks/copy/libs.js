'use strict';

const gulp = require('gulp');
const path = require('path');
const config = require('../../config');

gulp.task('copy-libs', ['bower-install'], () => {
    const libs = config.src.js.libs.concat(config.src.css.libs).map(filePath => path.join(config.folderNames.bower, filePath));
    const dest = path.join(config.baseDir.dest, config.folderNames.outputLibs);

    return gulp.src(libs, { base: config.folderNames.bower })
               .pipe(gulp.dest(dest))
});