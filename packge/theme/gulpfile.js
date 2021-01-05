const {
    src,
    dest,
    watch
} = require('gulp')
const sass = require('gulp-sass')

function buildSassTask() {
    console.log('build');
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(dest('./../../dist/css/'))
}

function watchBuildSassTask() {
    console.log('启动sass监听');
    // place code for your default task here
    watch(['./../*/*.scss'], buildSassTask)
}

exports.dev = watchBuildSassTask
exports.default = buildSassTask