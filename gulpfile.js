// 1ライブラリのインストール
// ２ライブラリの読み込み
// ３実行
// 変数の定義
let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sassGlob = require('gulp-sass-glob');


// 関数の実行
// タスク（’コマンド’、実行する内容）
// ⇩コンパイルするためのコード
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compact' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.task(['sass']));
});



// cssをminifyするためのタスク
gulp.task('minify', function(){
    // minify 
    return gulp.src("./assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(rename({
        suffix:'.min'
    }))
      .pipe(gulp.dest('./assets/css'));
});