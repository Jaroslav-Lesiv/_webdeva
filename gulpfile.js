var gulp = require("gulp");
var minCss = require("gulp-minify-css");
var stylus = require("gulp-stylus");
var csscomb = require("gulp-csscomb");
var autoprefixer = require("gulp-autoprefixer");
var babel = require("gulp-babel");
const image = require('gulp-image');
var pug = require("gulp-pug");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var browserSync = require('browser-sync').create();
// var clean = require("gulp-clean");
var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', () => {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});

const paths = {
  stylus: ["./src/assets/styl/*.styl"],
  js: ["./src/assets/js/*.js"],
  img: ["./src/img/**/*"],
  imgDist: ["./build/img"],
  pug: ["./src/index.pug"],
  css: ['./src/assets/css/*.css'],
  cssDist: ["./build/css/"],
  font: ["./src/fonts/*"],
  fontDist: ["./build/fonts/"],
  minjs: ["./build/js/"],
  html: ["./src/**/*.html"],
  htmlDist: ["./build/"]
};

gulp.task("stylus", () => {
  return gulp
    .src(paths.stylus)
    .pipe(plumber())
    .pipe(
      stylus({
        "include css": true
      })
    )
    .pipe(csscomb())
    .pipe(
      autoprefixer({
        browsers: ["last 3 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.cssDist[0]));
});

gulp.task("pug", () => {
  return gulp
    .src(paths.pug)
    .pipe(pug())
    .pipe(gulp.dest(paths.htmlDist[0]));
});

gulp.task("img", () => {
  return gulp
    .src(paths.img)
    .pipe(image())
    .pipe(gulp.dest(paths.imgDist[0]));
});

gulp.task("font", () => {
  return gulp
    .src(paths.font)
    .pipe(gulp.dest(paths.fontDist[0]));
});
gulp.task("javascript", () => {
  return gulp
    .src(paths.js)
    .pipe(plumber())
    .pipe(
      babel({
        plugins: ["transform-class-properties", "transform-object-rest-spread"],
        "presets": ["env"],
        ignore: ['particles.js']
      })
    )
    .pipe(gulp.dest(paths.minjs[0]));
});

gulp.task("html", () => {
  return gulp
    .src(paths.html)
    // .pipe(pug())
    .pipe(gulp.dest(paths.htmlDist[0]));
});

gulp.task("css", () => {
  return gulp
    .src(paths.css)
    // .pipe(pug())
    .pipe(gulp.dest(paths.cssDist[0]));
});

gulp.task('serve', () => browserSync.init({
  server: {
    baseDir: "./build"
  }
}))

gulp.task("watch", () => {
  gulp.watch(["./src/assets/styl/**/*.styl"], ["stylus"]);
  gulp.watch(paths.css, ["css"]);
  gulp.watch(paths.img, ["img"]);
  gulp.watch(paths.font, ["font"]);
  gulp.watch(["./src/**/*.pug"], ["pug"]);
  gulp.watch(paths.js, ["javascript"]);
  gulp.start('serve')
});

gulp.task("default", ["pug", "css", "stylus", "javascript", "img", 'font']);