//
// TODO: this bad boy needs some work
//

// Include gulp
var gulp = require('gulp');
console.log(gulp);

var jsScripts = [
    'node_modules/angular/angular.js',
    'node_modules/angular-route/angular-route.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery/dist/jquery.js'
];

var cssScripts  = [
    'node_modules/bootstrap/dist/css/bootstrap.css'
];

gulp.task('move', function(){
    gulp.src(jsScripts).pipe(gulp.dest('public/modules/js'));
    gulp.src(cssScripts).pipe(gulp.dest('public/modules/css'));
});

gulp.task('default', ['move']);