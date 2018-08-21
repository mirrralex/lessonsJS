/*jshint esversion: 6 */
let dom = document.getElementsByTagName('div')[0],
	startTime = new Date(),
	lastTime = new Date();
	lastTime.setMinutes(startTime.getMinutes() + 5);

function clockGo(startTime, lastTime) {

	while (startTime < lastTime){


	}
}

let timer = setInterval(function() {

	let	hour = startTime.getHours(),
		min = startTime.getMinutes(),
		sec = startTime.getSeconds();

	if(hour < 10) {

		hour = "0" + hour;

	}

	if(min < 10) {

		min = "0" + min;

	}

	if(sec < 10) {

		sec = "0" + sec;

	}

	dom.textContent = hour + '.' + min + '.' + sec;

	startTime.setSeconds(startTime.getSeconds() + 1);

}, 1000, startTime, lastTime);

setTimeout(function() {
	clearInterval(timer);
	alert('Таймер остновился!');
}, 300000);