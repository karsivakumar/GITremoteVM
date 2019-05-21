//gulp plugins
var gulp1 = require('gulp');

//combine files plugins
var uglify1 = require('gulp-uglify');

//live reload plugins
var livereload1 = require('gulp-livereload');

//concaetnation plugins
var concat = require('gulp-concat');

//minification plugins
var minify1 = require('gulp-minify-css');
var autoprefixer1 = require('gulp-autoprefixer');

//error handling plugins
var plumber1= require('gulp-plumber');

// source map plugins for uglify and concatenate
var sourcemap1 = require('gulp-sourcemaps');

// add header and footer plugins
var headerfooter1 = require('gulp-headerfooter');

//CSS SASS plugins
var sass1 = require('gulp-sass');

//JS compile plugins
var babel1 = require('gulp-babel');

//handlebar plugins
var gulphandlebars1 = require('gulp-handlebars');
var wrap1 = require('gulp-wrap');
var declare1 = require('gulp-declare');

//FILE PATHS
var HTMLTXT_PATH = 'public/content/index.html'
var HTML_PATH = 'public/'
var SCSS_PATH = 'public/scss/**/*.scss'
var CSS_PATH = 'public/styles/**/*.css'
var SCRIPT_PATH = 'public/scripts/**/*.js'
var DIST_PATH = 'public/dist/'
var TEMPLATE_PATH = 'templates/**/*.hbs'

//build HTML

gulp1.task('html',function(){
    console.log('starting the build html task by adding header and footer');
    return gulp1.src(HTMLTXT_PATH)
    .pipe(headerfooter1.header('public/htmlheader.txt'))
    .pipe(headerfooter1.footer('public/htmlfooter.txt'))
    .pipe(gulp1.dest(HTML_PATH))
    console.log('ending the build html task');
});

// SCSS styles

gulp1.task('styles',function() {
    console.log('starting styles task');
    return gulp1.src('public/scss/styles.scss')
    .pipe(plumber1(function(err) {
        console.log('error in processing styles');
        console.log(err);
        this.emit('end');
    }
    ))
    .pipe(sourcemap1.init())
    .pipe(autoprefixer1())
    .pipe(sass1())
    .pipe(sourcemap1.write())
    .pipe(gulp1.dest(DIST_PATH))
    .pipe(livereload1());
 });

// css styles

// gulp1.task('styles',function() {
//     console.log('starting styles task');
//     return gulp1.src(['public/styles/reset.css',CSS_PATH])
//     .pipe(plumber1(function(err) {
//         console.log('error in processing styles');
//         console.log(err);
//         this.emit('end');
//     }
//     ))
//     .pipe(sourcemap1.init())
//     .pipe(autoprefixer1())
//     .pipe(concat('styles.css'))
//     .pipe(sourcemap1.write())   
//     .pipe(minify1())
//     .pipe(gulp1.dest('public/dist/'))
//     .pipe(livereload1());
//  });

// scripts

gulp1.task('scripts',function(){
    console.log('starting scripts task');
    return gulp1.src(SCRIPT_PATH)
    .pipe(plumber1(function(err){
        console.log('error occurred in scripts plumber')
        this.emit('end');
    }))
    .pipe(sourcemap1.init())
    .pipe(babel1({
        presets : ['@babel/preset-env']
    }))
    .pipe(uglify1())
    .pipe(concat('scripts.js'))
    .pipe(sourcemap1.write())
    .pipe(gulp1.dest('public/dist/'))
    .pipe(livereload1());
});

// images

gulp1.task('images',function(){
    console.log('starting images task');
return new Promise(function(resolve,reject){
    console.log('ending watch function');
resolve() });
});

// templates
gulp1.task('templates',function(){
    console.log('starting templates task');
    return gulp1.src(TEMPLATE_PATH)
    .pipe(gulphandlebars1())
    .pipe(wrap1('Handlebars.template(<%= contents %>)'))
    .pipe(declare1({
        namespace: 'templates',
        noRedeclare: true,
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp1.dest('public/dist'))
    .pipe(livereload1());
    console.log('ending templates task');
});

//default

gulp1.task('default', gulp1.series('images', 'styles', 'scripts', 'templates'), function(){
    console.log('starting default task');
  });

//watch

gulp1.task('watch', gulp1.series('default', function(){
console.log('starting watch task');
require('./server.js');
// this is for using scss

gulp1.watch(SCSS_PATH,gulp1.series('styles'));
// this is for using css
// gulp1.watch(CSS_PATH,gulp1.series('styles'));

gulp1.watch(SCRIPT_PATH,gulp1.series('scripts'));
livereload1.listen();
// gulp1.watch(SCRIPT_PATH,['scripts']);
}));