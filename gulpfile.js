'use strict';

const path = require('path'),
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    ngAnnotate = require('gulp-ng-annotate'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject');

const src = {
    js: {
        libs: [
            './bower_components/angular/angular.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js'
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

gulp.task('compile-js', () => {
    const tsProject = ts.createProject('tsconfig.json');

    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(ngAnnotate())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest));
});

gulp.task('default', ['copy-html', 'bower-install', 'compile-js', 'compile-css'], () => {
    var sourceFiles = gulp.src(src.js.libs
        .concat([path.join(dest, 'all.js')])
        .concat(src.css.libs)
        .concat([path.join(dest, 'css', '*.css')]), { read: false });

    return gulp.src(src.html.main)
        .pipe(inject(sourceFiles))
        .pipe(gulp.dest(dest))
});