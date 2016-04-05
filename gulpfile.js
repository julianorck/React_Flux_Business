var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var concat = require("gulp-concat");
var sass = require("gulp-sass");

gulp.task("browserify", function(){
   browserify("./src/js/main.js")
       .transform("reactify")
       .bundle()
       .pipe(source("main.js"))
       .pipe(gulp.dest("app/js"))
});

gulp.task("copy", function(){
   gulp.src("src/*.html")
       .pipe(gulp.dest("app"))
});

gulp.task("sass", function(){
   return gulp.src("src/scss/*.scss")
       .pipe(sass())
       .pipe(gulp.dest("app/css"))
});

gulp.task("default",["browserify", "copy", "sass"], function(){
    return gulp.watch("src/**/*.*", ["default"]);
});

