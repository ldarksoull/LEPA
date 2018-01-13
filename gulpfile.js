var gulp        = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет
    plumber     = require('gulp-plumber')

gulp.task('sass', function() {
  gulp.src('app/sass/*.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    });

gulp.task('watch', ['sass'], function() {
    gulp.watch('app/sass/main.sass', ['sass']);
// Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});
 
gulp.task('default', ['watch' , 'sass']);
