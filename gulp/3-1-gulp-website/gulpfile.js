var gulp1 = require('gulp');
var uglify1 = require('gulp-uglify');

// styles

gulp1.task('styles',function() {
  console.log('starting styles task');
 });

// scripts

gulp1.task('scripts',function(){
    console.log('starting scripts task');
    return gulp1.src('public/scripts/*.js')
    .pipe(uglify1())
    .pipe(gulp1.dest('public/dist/'));
});

// images

gulp1.task('images',function(){
    console.log('starting images task');
});

//default

gulp1.task('default',function(){
  console.log('starting styles task');
});