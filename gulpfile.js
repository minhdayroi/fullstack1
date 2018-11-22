var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('createhtml', function buildHTML() {
    return gulp.src([
            './src/template/**/*.pug',
            '!./src/template/{**/\_*,**/\_*/**}.pug'
        ])
        .pipe(pug({
            pretty: true
                // Your options in here.
        }))
        .pipe(gulp.dest('.dist'));
});

gulp.task('taocss', function() {
    return gulp.src('./src/styles/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', function() {
    gulp.start([
        'taocss',
        'createhtml',
    ]);
});