"use strict";

const{src,dest} = require("gulp");
const { series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulp        = require('gulp');
const browsersync = require('browser-sync').create();

const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require('gulp-htmlmin');
const del = require('del');



var path = {
	build: {
		html: "dist/",
		js: "dist/assets/js/",
		css: "dist/assets/css/",
		images: "dist/assets/img/",
		other: "dist/assets/other/"
	},
	src:{
		html: "src/*.html",
		js: "src/assets/js/*.js",
		css: "src/assets/sass/**/**/**",
		// css: "src/assets/sass/style.scss",
		images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
	},
	watch:{

		html: "src/**/*.html",
		js: "src/assets/js/**/*.js",
		css: "src/assets/sass/**/**/**",
		// css: "src/assets/sass/**/*.scss",
		images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}",
		other: "src/assets/other/**/**/**"
	},
	clean: "./dist"
}


// Static server
function browserSync(done){
	browsersync.init({
		server:{
			baseDir: "./dist/"
		},
		port: 3000
	});
}

function browserSyncReload(done){
	browsersync.reload();
}
 
html
function html(done){
  return src(path.src.html, { base: "src/"})
  	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(dest(path.build.html))
    .pipe(browsersync.stream());
};

// sass
function css(done){
  return src(path.src.css, { base: "src/assets/sass/"})
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
			// Browserslist: ['last 8 versions'], //для поддержки последних 8 версий браузеров ???
			// cascade: true
		}))
    .pipe(cleanCSS({compatibility: 'ie8'}))     //cleanCSS
    .pipe(rename({
        suffix: ".min",
        extname: ".css"
    }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

// js
function js(done){
  return src(path.src.js, { base: "./src/assets/js/"})
	.pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

// images
function images(done){
  return src(path.src.images)
	.pipe(imagemin())
	.pipe(dest(path.build.images))
    .pipe(browsersync.stream());
}


function other(done){
	return gulp.src('src/assets/other/**/**/**')
//   return src(path.src.js, { base: "./src/assets/js/"})
	.pipe(dest(path.build.other))
    .pipe(browsersync.stream());
}


function clean(){
	return del(path.clean);
}

function watchfiles(){
	gulp.watch([path.watch.html],html);
	gulp.watch([path.watch.css],css);
	gulp.watch([path.watch.js],js);
	gulp.watch([path.watch.images],images);
	gulp.watch([path.watch.other],other);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, other));
const watch = gulp.parallel(build, watchfiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.other = other;
exports.clean = clean;
exports.watch = watch;
exports.build = build;
exports.default = watch;