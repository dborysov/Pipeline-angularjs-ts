'use strict';

const gulp = require('gulp'),
      path = require('path'),
      inject = require('gulp-inject'),
      config = require('../config');

gulp.task('inject-html', ['bower-install', 'compile-js', 'compile-css', 'compile-templates', 'copy-libs'], () => {
    const sourceFiles = gulp.src(config.src.js.libs.concat(config.src.css.libs).map(filePath => path.join(config.folderNames.outputLibs, filePath))
                                                   .concat(config.fileNames.outputJs)
                                                   .concat(config.fileNames.templatesJs)
                                                   .concat(path.join(config.folderNames.outputCss, '*.css'))
                                                   .map(filePath => path.join(config.baseDir.dest, filePath)));

    return gulp.src(config.src.html.main)
              .pipe(inject(sourceFiles, {
                  starttag: '<!-- inject:{{ext}} -->',
                  transform: function (filepath, file) {
                      if(!filepath.endsWith('.css') && !filepath.endsWith('.js'))
                        throw "File format is not supported";

                      const fileContent = file.contents.toString('utf8'),
                            tagName = filepath.endsWith('.css')
                                ? 'style'
                                : 'script';

                      return `<${tagName}>${fileContent}</${tagName}>`;
                  }
              }))
              .pipe(gulp.dest(config.baseDir.dest));
});