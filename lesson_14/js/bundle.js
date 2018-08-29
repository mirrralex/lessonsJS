(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Calculator
function calculator() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1];
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daySum = 0,
		daySumArr = [],
		personsSumArr = [],
		alterniteTotal = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() {
		personsSum = this.value;
		if (restDays.value == '') {
			totalValue.innerHTML = 0;	
		} else if (personsSum != '' && ((personsSum-1+1)%1) == 0 && personsSum != 'e') {
			personsSumArr.unshift(personsSum);
			alterniteTotal = (daySumArr[0] + personsSumArr[0]) * 4000;
			total = (daySum + personsSum) * 4000;
			if (total == 0){
				totalValue.innerHTML = alterniteTotal;
				} else {
				totalValue.innerHTML = total;
				}
			} else if (((personsSum-1+1)%1) == 0) {
				if (total == 0 && alterniteTotal == 0){
					alert('Введите целые числа');
				}
			}  else {
					totalValue.innerHTML = 0;
					alert('Введите целое количество людей');
				}
	});

	restDays.addEventListener('change', function() {
		daySum = this.value;
		if (persons.value == '') {
			totalValue.innerHTML = 0;	
		} else if (daySum != '' && ((daySum-1+1)%1) == 0 && daySum != 'e') {
			daySumArr.unshift(daySum);
			alterniteTotal = (daySumArr[0] + personsSumArr[0]) * 4000;
			total = (daySum + personsSum) * 4000;
			if (total == 0){
				totalValue.innerHTML = alterniteTotal;
			} else {
				totalValue.innerHTML = total;
				}
			} else if (((daySum-1+1)%1) == 0) {
				if (total == 0 && alterniteTotal == 0){
					alert('Введите целые числа');
				}
			} else {
					totalValue.innerHTML = 0;
					alert('Введите целое количество дней');
				}
	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {

			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}

	});
}
module.exports = calculator;
},{}],2:[function(require,module,exports){
//Form for to learn more
function learnMoreTab(){
	let message = new Object();
			message.loading = "Загрузка ...";
			message.success = "Спасибо! Скоро мы с вами свяжемся";
			message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

	form.addEventListener('submit',function(event){

		event.preventDefault();

		form.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();

		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function(){

			if(request.readyState < 4) {

				statusMessage.innerHTML = "<img id=img src = 'http://localhost/lessons/lesson_14/img/ajax-loader.gif'>";

			} else if (request.readyState === 4) {

				if(request.status === 200 && request.status < 300) {

					statusMessage.innerHTML = "<img id=img  src = 'http://localhost/lessons/lesson_14/img/loadComplete.jpg'>";
					//Добавден контент на страницу
				} else {

					statusMessage.innerHTML = message.failure;
				}
			}
		};
	});

	for (let i = 0; i < input.length; i++) {

		input[i].value = '';
		//Очищаем поля ввода
	}

	//Form for contact us
	let formContact = document.getElementsByClassName('contact-form')[0],
		inputContact = formContact.getElementsByTagName('input');

	formContact.addEventListener('submit',function(event) {

		event.preventDefault();

		formContact.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();

		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(formContact);

		request.send(formData);

		request.onreadystatechange = function(){

			if(request.readyState < 4) {

				statusMessage.innerHTML = message.loading;

			} else if (request.readyState === 4) {

				if(request.status === 200 && request.status < 300) {

					statusMessage.innerHTML = message.success;
					//Добавден контент на страницу

				} else {

					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {

		inputContact[i].value = '';
		//Очищаем поля ввода
	}
	});
}
module.exports = learnMoreTab;
},{}],3:[function(require,module,exports){
function model() {

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		moreDescription = document.getElementById('about');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	moreDescription.addEventListener('click', function(event) {
		e = event.target.matches('div.description-btn');
		if(e == true){
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
		}
	});
}
module.exports = model;

},{}],4:[function(require,module,exports){
function slider() {
	let slideIndex = 1,
			slides = document.getElementsByClassName('slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n){

		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function(){
		plusSlides(-1);
	});

	next.addEventListener('click', function(){
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});
}
module.exports = slider;
},{}],5:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {

		for(let i = a; i < tabContent.length; i++) {

			tabContent[i].classList.remove('show');

			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {

		if (tabContent[b].classList.contains('hide')) {

			hideTabContent(0);

			tabContent[b].classList.remove('hide');

			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {

		let target = event.target;

		if(target.className == 'info-header-tab') {

			for(let i = 0; i < tab.length; i++) {

				if (target ==tab[i]) {

					showTabContent(i);

					break;

				}
			}
		}
	});
}
module.exports = tab;
},{}],6:[function(require,module,exports){
//timer 
function timer(){
	let deadline = '2018-09-01';

	function getTimeRemaining(endTime) {

		let t = Date.parse(endTime) - Date.parse(new Date()),

			seconds = Math.floor(( t / 1000) % 60),

			minutes = Math.floor(( t / 1000 / 60) % 60),

			hours = Math.floor(t / (1000 * 60 * 60));

		if(hours < 0) {

			hours = 0;

			if(minutes < 0) {

				minutes = 0;

				if(seconds < 0) {

					seconds = 0;

				}
			}
		}

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endTime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {

			let t = getTimeRemaining(endTime);

			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if(hours.textContent < 10 && hours.textContent >= 0) {

				hours.textContent = "0" + hours.textContent;
			}

			if(minutes.textContent < 10 && minutes.textContent >= 0) {

				minutes.textContent = "0" + minutes.textContent;
			}

			if(seconds.textContent < 10 && seconds.textContent >= 0) {

				seconds.textContent = "0" + seconds.textContent;
			}

			if(t.total <= 0) {
				clearInterval(timeInterval);			
			}

			if(hours.textContent < 0) {

				hours.textContent = "00";

				if(minutes.textContent < 0) {

					minutes.textContent = "00";

					if(seconds.textContent < 0) {

						seconds.textContent = "00";
					}
				}
			}
		}

		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);
}

module.exports = timer;
},{}],7:[function(require,module,exports){
/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../js/parts/tab.js'),
			calculator = require('../js/parts/calculator.js'),
			model = require('../js/parts/model.js'),
			learnMoreTab = require('../js/parts/learn_more_tab.js'),
			slider = require('../js/parts/slider.js'),
			timer = require('../js/parts/timer.js');

	tab();
	calculator();
	model();
	learnMoreTab();
	slider();
	timer();
});
},{"../js/parts/calculator.js":1,"../js/parts/learn_more_tab.js":2,"../js/parts/model.js":3,"../js/parts/slider.js":4,"../js/parts/tab.js":5,"../js/parts/timer.js":6}]},{},[7]);
