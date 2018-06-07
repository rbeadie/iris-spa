var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject')
var del = require('del')

var dest = './dist'
var bld = dest + '/_temp'
var buildpaths = {
    js: [
        bld + '/*.js',
        bld + '**/*.js'
    ],
    minjs: [
        bld + '/*min.js',
        bld + '**/*min.js'
    ]
}

gulp.task('clean', ['build'], function(){
    // clean up the dist folder    
    return del(bld, {force:true})
})

gulp.task('third-party', function(){
    // copy vendor scripts
    return gulp.src(mainBowerFiles())
        .pipe(concat('vendor.js'))
        .pipe(minify())
        .pipe(gulp.dest(bld)) 
})

gulp.task('app', function(){
    // copy app scripts
    return gulp.src([
        // 'app/**/*.js',
        'app/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest(bld))
})

gulp.task('build', ['third-party', 'app'], function(){
    // build aspx

    return gulp.src('app/app.aspx')
        .pipe(inject(
            gulp.src(buildpaths.minjs),
            { starttag: '<!-- inject:app.js -->' 
            , transform: function(filepath, file){ return file.contents.toString() }
            }
        ))
        .pipe(gulp.dest(dest))
})


gulp.task('default', ['build', 'clean'])