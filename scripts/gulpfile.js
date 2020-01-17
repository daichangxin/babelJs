const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const minimist = require('minimist');
const path = require('path');

const resolve = (...args) => {
    const p = path.resolve(__dirname, '..', ...args);
    console.log('resolve, path:', p);
    return p;
}

const options = minimist(process.argv.slice(2));
console.log(`options, src:${options.src}, outDir:${options.outDir}, outFile:${options.outFile}`);

gulp.task('babelJs', () => {
    return gulp.src(resolve(`${options.src}/**/*.js`))
        .pipe(concat(options.outFile))
        .pipe(babel({
            presets: ["@babel/preset-env"], // fix Uncaught SyntaxError: Unexpected reserved word
        }))
        .pipe(uglify())
        .pipe(gulp.dest(resolve(`${options.outDir}`)));
});

gulp.task('default', gulp.series('babelJs'));