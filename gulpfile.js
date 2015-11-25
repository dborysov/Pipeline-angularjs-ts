'use strict';

const path = require('path'),
      glob = require('glob'),
      gulp = require('gulp'),
      browserify = require('browserify'),
      tsify = require('tsify'),
      source = require('vinyl-source-stream'),
      streamify = require('gulp-streamify'),
      sourcemaps = require('gulp-sourcemaps'),
      ngAnnotate = require('gulp-ng-annotate'),
      bower = require('gulp-bower'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      inject = require('gulp-inject');

const src = {
    ts: {
        customMainFiles: [
            './app/main.ts',
            './app/controllers/*.ts',
            './app/services/*.ts'
        ]
    },
    js: {
        libs: [
            './bower_components/angular/angular.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js'
        ]
    },
    css: {
        libs: ['./bower_components/bootstrap/dist/css/bootstrap.min.css'],
    },
    sass: {
        custom: ['./app/Content/Sass/+(*.sass|*.scss)']
    },
    html: {
        main: './app/index.html',
        partials: ['./app/partials/*.html']
    }
},
    dest = './dist';

gulp.task('bower-install', () => bower());

gulp.task('copy-html', () => gulp.src(src.html.partials).pipe(gulp.dest(path.join(dest, '/partials'))));

gulp.task('copy-libs', () => gulp.src(src.js.libs).pipe(gulp.dest(dest)));

gulp.task('compile-css', () => gulp.src(src.sass.custom).pipe(sass()).pipe(gulp.dest(path.join(dest, '/css'))));

gulp.task('compile-js', () => {
    const filesToInject = src.ts.customMainFiles
                                .reduce((prev, cur) => prev.concat(glob.sync(cur)), []);

    return browserify({debug: true})
        .add(filesToInject)
        .plugin(tsify)
        .bundle()
        .pipe(source('all.js'))
        .pipe(streamify(sourcemaps.init({loadMaps: true})))
        .pipe(ngAnnotate())
        .pipe(streamify(uglify()))
        .pipe(streamify(sourcemaps.write('.')))
        .pipe(gulp.dest(dest))
    });

gulp.task('inject-html', ['copy-html', 'bower-install', 'compile-js', 'compile-css'], () => {
    var sourceFiles = gulp.src(src.js.libs
                            .concat([path.join(dest, 'all.js')])
                            .concat(src.css.libs)
                            .concat([path.join(dest, 'css', '*.css')]), { read: false });

    return gulp.src(src.html.main)
        .pipe(inject(sourceFiles))
        .pipe(gulp.dest(dest))
})

gulp.task('default', ['inject-html']);