// Include gulp
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

var dest = 'assets/public/';

gulp.task('js', function() {
    var jsFiles = ['assets/src/js/*'];

    gulp.src(plugins.mainBowerFiles().concat(jsFiles))
        .pipe(plugins.filter('*.js'))
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js'));
});

gulp.task('css', function() {
    var cssFiles = ['assets/src/css/*'];
    console.log(plugins.mainBowerFiles());

    gulp.src(plugins.mainBowerFiles().concat(cssFiles))
        .pipe(plugins.filter('*.css'))
        .pipe(plugins.order([
            'normalize.css',
            '*'
        ]))
        .pipe(plugins.concat('styles.css'))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(dest + 'css'));
});

gulp.task('default', ['js', 'css']);
