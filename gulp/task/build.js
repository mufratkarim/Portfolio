var gulp=require('gulp');
var imagemin=require('gulp-imagemin');
var del=require('del');
var usemin=require('gulp-usemin');
var rev=require('gulp-rev');
var cssnano=require('gulp-cssnano');
var uglify=require('gulp-uglify');
var browserSync=require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
	notify: false,
	server: {
		baseDir:"docs"
		}
	});
});

gulp.task('deleteDistFolder', function() {
	return del("./docs");
})

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src('./app/assets/images/**/*')
		.pipe(imagemin({
			progressive:true,
			interlaced:true,
			multipass:true 
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy=[
		'./app/**/*',
		'!./app/in',
		'!./app/assets/images/**/*',
		'!./app/assets/scripts/**',
		'!./app/assets/styles/**',
		'!./app/temp',
		'!./app/temp/**'

	]
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start("usemin");
});

gulp.task('usemin', ['styles', 'scripts'], function() {
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css:[function() {return rev()}, function() {return cssnano()}],
			js:[function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest("./docs"));	
})

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);