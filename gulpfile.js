const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('minimg', () =>
	gulp.src('image/**', {
		base: '.'
	})
	.pipe(imagemin([
		imagemin.gifsicle({
			interlaced: true
		}),
		imagemin.jpegtran({
			progressive: true
		}),
		imagemin.optipng({
			optimizationLevel: 5
		}),
		imagemin.svgo({
			plugins: [{
				removeViewBox: true
			}, {
				cleanupIDs: false
			}]
		})
	]))
	.pipe(gulp.dest('imgmin/'))
);


let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;

gulp.task("minify", function () {
	return gulp.src("js/resizergallery.js")
		.pipe(rename("resizergallery.min.js"))
		.pipe(uglify( /* options */ ))
		.pipe(gulp.dest("js/"));
});


const webp = require('gulp-webp');
gulp.task('towebm',  function () {

		gulp.src('img/**', {
			base: '.'
		})
		.pipe(webp())
		.pipe(gulp.dest('imgwebm/'))

});


const cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename("style.min.css"))
    .pipe(gulp.dest('css/'));
});
