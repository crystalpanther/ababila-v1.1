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
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglifyjs');

var params = {
    out: 'public',
    levels: ['common.blocks', 'mobile.blocks']
}
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'public'
        },
        notify: falsegu
    });
});
gulp.task('default', ['server', 'build']);

gulp.task('server', function(){
    browserSync({
        server: {
            baseDir: params.out
        },
        notify: false
    });
    gulp.watch(params.levels.map(function(level){
        var htmlGlob = level + '*.html';
        return htmlGlob;
    }), ['html']);
    gulp.watch(params.levels.map(function(level){
        var cssGlob = level + '/**/**/*.css';
        return cssGlob;
    }), ['css']);
    gulp.watch(params.levels.map(function(level){
        var jsGlob = level + '/**/*.js';
        return jsGlob;
    }), ['scripts']);
    gulp.watch('*.html', browserSync.reload());
});
gulp.task('build', ['html', 'css', 'img', 'scripts', 'fonts']);

gulp.task('fonts', function(){
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('public/fonts'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('html', function(){
    gulp.src('*.html')
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('css', function(){
    gulp.src([
        'css/**/**/*.css',
        'common.blocks/**/**/*.css',
        'mobile.blocks/**/**/*.css',
        'libs/**/*.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest(params.out))
        .pipe(browserSync.reload({stream: true}));

});
gulp.task('scripts', function(){
    gulp.src([
        'libs/jquery/jquery.min.js',
        'libs/jquery/jquery.mousewheel.min.js',
        'libs/magnific-popup/jquery.magnific-popup.min.js',
        'libs/images-loaded/imagesloaded.pkgd.min.js',
        'libs/slick/dist/slick.min.js'
    ])
        .pipe(concat('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));

    gulp.src([
        'common.blocks/**/**/*.js',
        'mobile.blocks/**/**/*.js',
        'js/main.js',
    ])
            .pipe(concat('main.js'))
            .pipe(gulp.dest('public/js'));

});
gulp.task('img', function() {
    gulp.src('img/**/*')
        .pipe(gulp.dest('public/img'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('watch', ['browser-sync', 'css', 'scripts', 'html'], function() {
    gulp.watch([
        'common.blocks/**/**/*.css',
        'mobile.blocks/**/**/*.css'],
        ['css']);
    gulp.watch('*.html', browserSync.reload);
});

