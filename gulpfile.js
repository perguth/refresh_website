var gulp = require('gulp')
var fs = require('fs')
var browserify = require('browserify')
var babelify = require('babelify')

gulp.task('default', function () {
  // place code for your default task here
})
gulp.task('watch', function () {
  gulp.watch('**/*.js', function (event) {
    browserify({ debug: true })
      .transform(babelify)
      .require('./script.js', { entry: true })
      .bundle()
      .on('error', function (err) { console.log('Error: ' + err.message) })
      .pipe(fs.createWriteStream('bundle.js'))
  })
})
