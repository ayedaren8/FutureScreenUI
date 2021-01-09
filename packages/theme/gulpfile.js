const {
    src,
    dest,
    watch
} = require('gulp')
const sass = require('gulp-sass')

function buildSassTask() {
    console.log('build');
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('./../../release/css/'))
}

function watchBuildSassTask() {
    console.log('启动sass监听');
    // place code for your default task here
    watch(['./**/*.scss'], buildSassTask)
}

function build() {
    watchBuildSassTask()
    buildSassTask()
}

exports.build = build