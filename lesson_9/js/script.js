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

	let deadline = '2018-08-23';

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

	moreDescription.addEventListener('click', function() {
		if(event.target.matches('div.description-btn')){
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
		}
	});
});