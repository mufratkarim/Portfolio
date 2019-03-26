var gulp=require('gulp');
var postcss=require('gulp-postcss');
var autoprefixer=require('autoprefixer');
var cssvars=require('postcss-simple-vars');
var nested=require('postcss-nested');
var cssimport=require('postcss-import');
var mixins=require('postcss-mixins');
var hexrgba=require('postcss-hexrgba');

gulp.task('styles',function() 
{
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
	.on('error',function (info) {
		console.log(info.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'))
}
)