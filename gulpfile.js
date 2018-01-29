var connect = require('gulp-connect');
var gulp=require('gulp');
var webserver = require('gulp-webserver');
var qs=require('qs');
var url=require('url');
var conncat=require('gulp-concat');//合并css
var mincss=require('gulp-clean-css');//压缩css
var rename=require('gulp-rename');//重命名
var minimg = require('gulp-imagemin');//压缩图片
var htmlmin = require('gulp-htmlmin');//压缩html
var uglify = require('gulp-uglify');//压缩js
gulp.task('minHtml',function(){
        gulp.src('./index1.html')
            .pipe(htmlmin(options))
            .pipe(gulp.dest('./html/'))
    })
gulp.task('minHtml',function(){
	gulp.src('./index1.html')
	    .pipe(htmlmin(option))
	     .pipe(gulp.dest('./html'))
})
 gulp.task('minJs',function(){
 	gulp.src('./js.js')
 	.pipe(uglify())
 	.pipe(gulp.dest('./js/'))
 })
 gulp.task('httpServer',function(){
 	connect.server({
 		port:8080,
 		liverload:true
 	})
 })
 gulp.task('reloadBroser',function(){
 	gulp.src('./index.html')
 	.pipe(conncat.reload())
 })
 gulp.task('watch',function(){
 	gulp.watch('./index.html',['reloadBroser'])
 })
  gulp.task('minImage',function(){
        gulp.src('./1.jpg')
            .pipe(minimg())
            .pipe(gulp.dest('./image/'))
    })


    var options = {
         removeComments: true,//清除HTML注释
         collapseWhitespace: true,//压缩HTML
         collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
         removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
         removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
         removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
         minifyJS: true,//压缩页面JS
         minifyCSS: true//压缩页面CSS
 	}

    gulp.task('minHtml',function(){
        gulp.src('./index1.html')
            .pipe(htmlmin(options))
            .pipe(gulp.dest('./html/'))
    })
