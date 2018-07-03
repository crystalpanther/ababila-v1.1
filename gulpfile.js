/**
 * Created by elina on 7/3/2018.
 */
var gulp   = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var imagemin    = require('imagemin-pngquant');
var pngquant    = require('imagemin-pngquant');
var cache       = require('gulp-cache');
var uglify      = require('gulp-uglifyjs');

var params = {
    out: 'public',
    htmlSrc: 'index.html',
    levels: ['common.blocks', 'mobile.blocks']
}
gulp.task('default', ['server', 'build']);

gulp.task('server', function(){
    browserSync({
        server: { // Определяем параметры сервера
            baseDir: params.out // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
    gulp.watch('*.html', ['html']);
});
gulp.task('build', ['html', 'css', 'img', 'scripts']);

gulp.task('html', function(){
    gulp.src([params.htmlSrc])
        .pipe(rename('index.html'))
        .pipe(gulp.dest(params.out))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('css', function(){
    gulp.src(['common.blocks/**/**/*.css', 'mobile.blocks/**/**/*.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(params.out))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('scripts', function(){
    gulp.src(['common.blocks/**/**/*.js', 'mobile.blocks/**/**/*.js', 'js/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('img', function() {
    gulp.src('img/**/*')
        .pipe(gulp.dest('public/img'))
        .pipe(browserSync.reload({stream: true}));
});
// gulp.watch(params.levels.map(function(levels){
//     var cssGlob = level + '/**/*.css';
// }));

