var gulp = require('gulp');

var concat = require('gulp-concat');

//var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');
var cleanCss = require('gulp-clean-css');

var uglify = require('gulp-uglify');
var minify = require('gulp-minify');

var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

var rev = require('gulp-rev');
var del = require('del');


gulp.task('watch', function() {
 gulp.watch('js/*.js', ['pack-js']);
 gulp.watch('css/*.css', ['pack-css']);
});

//        //   /////
//        //  //   //
//        //   ///
//        //      ///
//  //   //   //   //
//   ////      ////
gulp.task('clean-js', function () {
	return del([
		'js/bundle.js'
	]);
});

gulp.task('pack-js', ['clean-js'], function () {
    return gulp.src(['lib/jquery/dist/jquery.js', 'lib/bootstrap/dist/js/bootstrap.js', 'js/jquery.easing.min.js', 'js/bienal.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(uglify())
        //.pipe(rev())
        //.pipe(gulp.dest(''))
        //.pipe(rev.manifest('build/rev-manifest.json', {
        //    merge: true
        //}))
        .pipe(gulp.dest('js'));
    });

    //   ////      /////     ////
    //  //  //    //   //  //   //
    //  //         ///      ///
    //  //           ///       ///
    //  //  //    //   //   //   //
    //   ////      ////       ////

    gulp.task('clean-css', function () {
    	return del([
    		'css/stylesheet.css'
    	]);
    });

gulp.task('pack-css', ['clean-css'], function () {
    return gulp.src([
      'lib/bootstrap/dist/css/bootstrap.min.css',
      'lib/font-awesome/css/font-awesome.min.css',
      'css/style.css',
      'css/roboto.css',
      'css/roboto_condensed.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(nano())
        .pipe(cleanCss())
        //.pipe(rev())
        .pipe(gulp.dest('css'))
        /*.pipe(rev.manifest('build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest(''));*/
});


// //    //  //////////  //\\  ////  //
// //    //      //      // \\// //  //
// ////////      //      //  \/  //  //
// //    //      //      //      //  //
// //    //      //      //      //  //////
gulp.task('pack-html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      collapseBooleanAttributes: true}))
    .pipe(gulp.dest('build'))
});

gulp.task('pack-fonts', function() {
  return gulp.src(['lib/bootstrap/fonts/*', 'lib/font-awesome/fonts/*'])
  .pipe(gulp.dest('build/fonts'))
});

gulp.task('pack-images', ['flyers'], function(){
  return gulp.src('img/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('build/img'))
});


gulp.task('default', ['watch']);
