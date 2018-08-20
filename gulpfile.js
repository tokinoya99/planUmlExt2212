var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var replace = require('gulp-replace');

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

gulp.task("less" , function(){
    return gulp.src([
      './src/style/less/*.less'
      ,"./src/node_modules/semantic/semantic.css"
      ,"./src/node_modules/editor/codemirror.css"
    ])
    .pipe(less())
    .pipe(concatCss("bundle.css"))
    .pipe(replace('../../node_modules/semantic/themes/', './themes/'))
    .pipe(gulp.dest("./client/common/css/"));
})


gulp.task("webpack" , function(){
  return webpackStream(webpackConfig , webpack).pipe(gulp.dest('./client/common/js'));
})


gulp.task('watch', function() {
  //変更監視
  gulp.watch(['./*/*.es6' , './*/node_modules/*/*.es6' , './src/style/less/*.less'] , function(event){
    console.log('File ' + event.path + ' was ' + event.type);
    //console.log(event.path);
    runSequence(
      "babel"
      ,"less"
      ,"webpack"
    )
  })
});


