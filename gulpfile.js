'use strict';

var path = require('path'),
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject');

var src = {
    js: {
        libs: [
            './node_modules/babel-es6-polyfill/browser-polyfill.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js'
        ],
        custom: [
            './app/main.js',
            './app/Services/*.js',
            './app/Controllers/*.js'
        ]
    },
    css: {
        libs: ['./bower_components/bootstrap/dist/css/bootstrap.min.css'],
        custom: []
    },
    sass: {
        custom: [
            './app/Content/Sass/+(*.sass|*.scss)'
        ]
    },
    html: {
        main: './app/index.html',
        partials: ['./app/partials/*.html']
    }
},
    dest = './dest';

gulp.task('bower-install', () => bower());

gulp.task('copy-html', () => gulp.src(src.html.partials).pipe(gulp.dest(path.join(dest, '/partials'))));

gulp.task('copy-libs', () => gulp.src(src.js.libs).pipe(gulp.dest(dest)));

gulp.task('compile-css', () => gulp.src(src.sass.custom).pipe(sass()).pipe(gulp.dest(path.join(dest, '/css'))));

gulp.task('compile-js', () =>
    gulp.src(src.js.custom)
        .pipe(sourcemaps.init())
        .pipe(babel( {presets: ['es2015']} ))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest)));

gulp.task('default', ['copy-html', 'bower-install', 'compile-js', 'compile-css'], () => {
    var sourceFiles = gulp.src(src.js.libs
                                     .concat([path.join(dest, 'all.js')])
                                     .concat(src.css.libs)
                                     .concat([path.join(dest, 'css', '*.css')]), { read: false });

    return gulp.src(src.html.main)
               .pipe(inject(sourceFiles))
               .pipe(gulp.dest(dest))
});