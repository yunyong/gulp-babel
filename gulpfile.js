const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function(){
    // node sources
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));

    //browser sources
    gulp.src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/dist'));
});
