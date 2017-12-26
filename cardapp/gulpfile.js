var gulp = require('gulp')
var concat = require('gulp-concat')
var babel = require('gulp-babel')

gulp.task('task1' , function(){
    console.log('running task 1');
})

gulp.task('default' , function(){
    console.log('running build');
    gulp.src('./src/**/*.jsx')
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./build'))

})