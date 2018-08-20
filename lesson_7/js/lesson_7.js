/*jshint esversion: 6 */
let dom = document.getElementsByTagName('div')[0];
	date = new Date(2000, 0, 6, 8, 9, 7, 4, 3 ),
	hour = date.getHours(),
	min = date.getMinutes(),
	sec = date.getSeconds();
if(hour < 10) {
	hour = "0" + hour;
}
if(min < 10) {
	min = "0" + min;
}
if(sec < 10) {
	sec = "0" + sec;
}

console.log(dom);

dom.textContent =  dom.textContent + hour + '.' + min + '.' + sec;