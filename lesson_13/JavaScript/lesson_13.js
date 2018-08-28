/*jshint esversion: 6 */
$(document).ready(function() {

	$('.main_btn').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({
			opacity: 'toggle',
			height: 'toggle'
		})
	});

	$('.main_btna').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({
			opacity: 'toggle',
			height: 'toggle'
		})
	});
//
	$('a[href*="#sheldure"]').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({
			opacity: 'toggle',
			height: 'toggle'
		})
	});
//Крестик
	$('.close').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').slideToggle('slow');
	});
});