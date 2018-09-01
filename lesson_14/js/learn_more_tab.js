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

module.exports = learnMoreTab();