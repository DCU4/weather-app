var gulp = require("gulp"),
    gutil = require("gulp-util"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat");
gulp.task("log", function (s) {
    gutil.log("== My Log Task =="), s()
}), gulp.task("sass", function (s) {
    gulp.src("style.scss").pipe(sass({
        style: "expanded"
    })).on("error", gutil.log).pipe(gulp.dest("css")), s()
}), gulp.task("js", function (s) {
    gulp.src("*.js").pipe(uglify()).pipe(concat("script.js")).pipe(gulp.dest("scripts")), s()
}), gulp.task("watch", function (s) {
    gulp.watch("main.js", gulp.series("js")), gulp.watch("style.scss", gulp.series("sass")), s()
});
for (var links = document.getElementsByClassName("link"), workLink = document.getElementById("work"), aboutLink = document.getElementById("about"), work = document.querySelector(".work"), about = document.querySelector(".about"), selected = !1, i = 0; i < links.length; i++) links[i].addEventListener("click", function () {
    this === aboutLink ? (workLink.classList.remove("selected"), aboutLink.classList.add("selected"), $(".about").animate({
        opacity: "1"
    }).css({
        display: "flex"
    }), $(".work").animate({
        opacity: "0"
    }).css({
        display: "none"
    })) : (aboutLink.classList.remove("selected"), workLink.classList.add("selected"), $(".work").animate({
        opacity: "1"
    }).css({
        display: "flex"
    }), $(".about").animate({
        opacity: "0"
    }).css({
        display: "none"
    }))
});
var projects = $(".project");
$("section > p").on("mouseover mouseout", function () {
    $(this).next().toggleClass("shown"), console.log("hover")
}), $("section").on("mouseover mouseout", function () {
    $(this).toggleClass("on-top")
});