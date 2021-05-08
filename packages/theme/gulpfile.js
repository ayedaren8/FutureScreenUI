const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

function buildSassTask() {
	console.log('build');

	return src('index.scss')
		.pipe(sass())
		.pipe(dest('./../../release/style/'));
}
function fontCopy() {
	return src('./font/*').pipe(dest('./../../release/style/font'));
}

function watchBuildSassTask() {
	console.log('启动sass监听');
	// place code for your default task here
	watch(['./**/*.scss'], buildSassTask);
}

function build() {
	fontCopy();
	watchBuildSassTask();
	buildSassTask();
}

exports.build = build;
