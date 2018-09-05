/*jshint esversion: 6 */	
	let message = new Object();

		message.loading = "Загрузка ...";
		message.success = "Спасибо! Скоро мы с вами свяжемся";
		message.failure = "Что-то пошло не так...";

		let form = document.getElementsByClassName('main-form')[0],
			formBotton = form.getElementsByClassName('popup-form__btn')[0] ,
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

			statusMessage.classList.add('status');

		function sendForm(elem) {
			elem.addEventListener('submit', function(e) {
				e.preventDefault();
				elem.appendChild(statusMessage);
				let formData = new FormData(elem);

				function postData(data) {

					return new Promise(function(resolve, reject) {
						let request = new XMLHttpRequest();

						request.open('POST', 'server.php');

						request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

						request.onreadystatechange = function() {

							if (request.readyState < 4) {
								resolve();
							} else if (request.readyState === 4) {
								if (request.status === 200 && request.status < 300) {
									resolve();
								} else {
									reject();
								}
							}
						};

						request.send(data);

					});
				} //End postData

				function clearInput() {
					for (let i = 0; i < input.length; i++) {
						input[i].value = '';
					}
				}

				postData(formData)
					.then( () => statusMessage.innerHTML = message.loading)
					.then( () => {
						statusMessage.innerHTML = message.success;
						statusMessage.innerHTML = '';
					})
					.catch( () => statusMessage.innerHTML = message.failure)
					.then(clearInput);
			});
		}

		sendForm(form);
		sendForm(formBotton);