/*jshint esversion: 6 */
class options {
	constructor() {
		this.height = 20;
	  this.width = 700;
	  this.backGround = "red";
	  this.fontSize = "100%";
	  this.textAlign = "center";
	}
	newDiv(name, text, place) {
		let div = document.createElement('div');
		div.className = '${name}';
		div.textContent = text + ' ';
		div.style.height = this.height;
		div.style.width = this.width;
		div.style.backgroundColor = this.backGround;
		div.style.fontSize = this.fontSize;
		div.style.textAlign = this.textAlign;
		place.appendChild(div);
	}
};
let div = new options();
div.newDiv('first', 'abrakadabra', document.body);