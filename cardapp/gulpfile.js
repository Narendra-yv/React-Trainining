var gulp = require('gulp');
var gutil = require('gulp-util');
//Bundler
var browserify = require('browserify');
//Watch for any changes in .jsx file --> Recompile
var watchify = require('watchify');
// For transcompilation
var babelify = require('babelify');
// Wrapper to gulp.src
var source = require('vinyl-source-stream')

// npm install --save-dev gulp-util browserify watchify babelify vinyl-source-stream


gulp.task('default', function() {
    var bundler = watchify(browserify({
        entries: ['./srcspa/app.js'],
        // transform: [reactify],
        transform: [["babelify", {presets: ["es2015","react"]}]],
        extensions: ['.js'],
        debug: false,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('dist.js'))
            .pipe(gulp.dest('./build'));
    };
    build();
    bundler.on('update', build);

})