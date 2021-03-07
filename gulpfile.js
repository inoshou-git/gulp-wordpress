'use strict'

const { src, dest, parallel, watch } = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

function sassTask() {
  return src('./src/themes/foo/assets/css/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(dest('./src/themes/foo/'))
}

function watchStyle() {
  watch('./src/themes/foo/assets/css/**/*.scss', sassTask)
}

exports.watch = watchStyle
exports.default = parallel(sassTask)
