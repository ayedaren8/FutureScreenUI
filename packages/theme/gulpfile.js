const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

function buildSassTask() {
	return src('index.scss')
		.pipe(sass())
		.pipe(dest('./../../release/style/'));
}

function fontCopy() {
	return src('./font/*').pipe(dest('./../../release/style/font'));
}

function watchBuildSassTask() {
	watch(['./**/*.scss'], buildSassTask);
}

function build() {
	fontCopy();
	watchBuildSassTask();
	buildSassTask();
}

exports.build = build;
