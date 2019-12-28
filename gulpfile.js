'use strict';

const gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

function mochaTest(){
        return gulp.src(['test/*.js'], {read:false})
            .pipe(mocha({reporter: 'list'}))
            .on('error', gutil.log);
}

gulp.task('mocha', function(){
    return mochaTest()
})

gulp.task('watch-mocha', function(){
    gulp.watch(['./**/*.js', 'test/**/*.js'], function(cb){
        mochaTest();
        cb();
    });
})
