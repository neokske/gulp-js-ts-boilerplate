const gulp = require("gulp");
const babel = require("gulp-babel");
const tsProject = require("gulp-typescript").createProject({
  noImplicitAny: false
});

const jsWatch = "src/**/*.js";
const tsWatch = "src/**/*.ts";

gulp.task("babel", () => {
  return gulp
    .src(jsWatch)
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(gulp.dest("build/babelOut"));
});

gulp.task("ts", () => {
  return gulp
    .src(tsWatch)
    .pipe(tsProject())
    .pipe(gulp.dest("build/tsOut"));
});

gulp.task("default", ["babel", "ts"], () => {
  gulp.watch(jsWatch, ["babel"]);
  gulp.watch(tsWatch, ["ts"]);
});
