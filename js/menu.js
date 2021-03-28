$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.menu-overlay').toggleClass('open');
		$('#main-menu1').toggleClass('open');
		$('#main-menu2').toggleClass('open');
		$('.main-nav').toggleClass('mobile-active');
		//$('.top-first-row').toggleClass('first-active');
		$('ul').toggleClass( "desktop-visible");
	});
});// JavaScript Document