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
		var $name = $('.contactform_name'),
			$phone = $('.contactform_phone'),
			$email = $('.contactform_mail'),
			$terms = $('.checkbox'),
			$message = $('div');
			$textofmessage = 'От '+$name + ' котнтактный телефон ' + $phone + ' емейл ' + $email + ' соглашение ' + $terms + ' сообщение: ' + $message;
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({
			opacity: 'toggle',
			height: 'toggle'
		})
		$.ajax({
		  contentType: 'aplication/x-www-form-urlencoded',
		  method: 'POST',
		  url: 'server.php',
		  success: function($textofmessage) {

		  }
		})	
	});
//
	$('a[href*="#sheldure"]').on('click', function(){
		var $name = $('.contactform_name'),
			$phone = $('.contactform_phone'),
			$email = $('.contactform_mail'),
			$terms = $('.checkbox'),
			$message = $('div');
			$textofmessage = 'От '+$name + ' котнтактный телефон ' + $phone + ' емейл ' + $email + ' соглашение ' + $terms + ' сообщение: ' + $message;
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({
			opacity: 'toggle',
			height: 'toggle'
		})
		$.ajax({
		  contentType: 'aplication/x-www-form-urlencoded',
		  method: 'POST',
		  url: 'server.php',
		  success: function($textofmessage) {

		  }
		})	
	});
//Крестик
	$('.close').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').slideToggle('slow');
	});
});

