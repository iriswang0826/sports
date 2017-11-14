$(document).ready(function(){
	var deviceWidth = document.documentElement.clientWidth;
	var deviceHeight = document.documentElement.clientHeight;
	if(deviceWidth > 750) {deviceWidth = 750;}
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	// .view 高度
	$('.view').css('min-height',$(window).height());
    //课程list高度
    $('.class-pannel').css('height', $(window).height() - $('.topbar').innerHeight());
    $('.enroll .class-pannel').css('height', $(window).height() - $('.topbar').innerHeight() - $('.enroll-btn').innerHeight());
})