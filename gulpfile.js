let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat');

gulp.task('scss', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function () {
	return gulp.src('app/**/*.html')
		.pipe(browserSync.reload({stream:true}))	
});

gulp.task('concat', function () {
 return gulp.src('app/css/**/*.css')
   .pipe(concat("main.css"))
   .pipe(gulp.dest('app/css/'));
});

gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
	gulp.watch('app/**/*.html',  gulp.parallel('html'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))