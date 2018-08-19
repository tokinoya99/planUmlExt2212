var gulp = require('gulp');
var path = require('path');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');
var webpackStream = require("webpack-stream");
var webpack = require("webpack");

var webpackConfig = require("./webpack.config");

gulp.task('default', ["watch"]);

gulp.task("babel" , function(){
    return gulp.src(['./*/*.es6' , './*/node_modules/*/*.es6'])
    .pipe(babel())
    .pipe(gulp.dest("./"));
})

gulp.task("webpack" , function(){
  return webpackStream(webpackConfig , webpack).pipe(gulp.dest('./client/common/js'));
})


gulp.task('watch', function() {
  //変更監視
  gulp.watch(['./*/*.es6' , './*/node_modules/*/*.es6'] , function(event){
    console.log('File ' + event.path + ' was ' + event.type);
    //console.log(event.path);
    runSequence(
      "babel"
      ,"webpack"
    )
  })
});


