'use strict';

const gulp = require('gulp'),
      path = require('path'),
      inject = require('gulp-inject'),
      htmlmin = require('gulp-html-minifier'),
      config = require('../config');

gulp.task('inject-html', ['compile-js', 'compile-css', 'compile-templates', 'copy-libs'], () => {
    const sourceFiles = gulp.src(config.src.js.libs.concat(config.src.css.libs).map(filePath => path.join(config.folderNames.outputLibs, filePath))
                                                   .concat(config.fileNames.outputJs)
                                                   .concat(config.fileNames.templatesJs)
                                                   .concat(path.join(config.folderNames.outputCss, '*.css'))
                                                   .map(filePath => path.join(config.baseDir.dest, filePath)));

    return gulp.src(config.src.html.main)
               .pipe(inject(sourceFiles, {ignorePath: `../${config.baseDir.dest}`, relative: true}))
               .pipe(htmlmin(config.htmlMinifyConfig))
               .pipe(gulp.dest(config.baseDir.dest));
});