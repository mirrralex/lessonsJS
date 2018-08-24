/*jshint esversion: 6 */
class options {
	constructor() {
		this.height = '20px';
	  this.width ='700px';
	  this.backGround = 'red';
	  this.fontSize = '100%';
	  this.textAlign = 'center';
	}
	newDiv(name, text, place) {
		let div = document.createElement('div');
		div.className = '${name}';
		div.innerHTML = text + ' ';
		div.height = this.height;
		div.width = this.width;
		div.backgroundColor = this.backGround;
		div.fontSize = this.fontSize;
		div.textAlign = this.textAlign;
		place.appendChild(div);
	}
};
let div = new options();
div.newDiv('first', 'abrakadabra', document.body);