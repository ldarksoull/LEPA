//Плавное выпадающее меню
$(document).ready(function () {
    $("#btn-submit").click(function () {
        $("#nav").slideToggle("slow");
        $(this).toggleClass("active");
    });
});
//скрипт плавной прокрутки якорей
$(function(){
	$('a[href^="#"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 1500);
		return false;
	});
});