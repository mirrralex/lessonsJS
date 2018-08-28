/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

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

	//timer 

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

	//Page Jump
	/*document.querySelectorAll("header~ul~li").style.transition = 'ease';
	document.querySelectorAll("header~ul~li").style.transitionDelay = '2s';*/

	let liList = document.querySelectorAll("li");
	for (let i = 0; i < liList.length; i++){
		document.body.style.transitionTimingFunction = 'ease';
		document.body.style.transitionDelay = '8s';

		liList[i].style.transitionTimingFunction = 'ease';
		liList[i].style.transitionDelay = '8s';
	}

	//model

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

	//Form for to learn more
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

				statusMessage.innerHTML = "<img id=img src = 'http://localhost/lessons/lesson_11/img/ajax-loader.gif'>";

			} else if (request.readyState === 4) {

				if(request.status === 200 && request.status < 300) {

					statusMessage.innerHTML = "<img id=img  src = 'http://localhost/lessons/lesson_11/img/loadComplete.jpg'>";
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

	//Slider
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

	//Calculator

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

});