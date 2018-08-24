/*jshint esversion: 6 */
class options {
	constructor(height, width, backGround, fontSize, textAlign) {
		this.height = height;
	  this.width = width;
	  this.backGround = backGround;
	  this.fontSize = fontSize;
	  this.textAlign = textAlign;
	}
	newDiv(name, text, place) {
		let div = document.createElement('div');
		div.className = '${name}';
		div.innerHTML = text + ' ';
		div.height = this.height;
		div.width = this.width;
		div.backgroundColor = 'red';
		div.fontSize = this.fontSize;
		div.textAlign = this.textAlign;
		place.appendChild(div);
	}
};
const div = new options('20px', '700px', 'green', '100%', 'center');
div.newDiv('first', 'abrakadabra', document.body);