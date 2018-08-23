/*jshint esversion: 6 */
class options {
	constructor(height, width, backGround, fontSize, textAlign) {
		this.height = height;
	  this.width = width;
	  this.backGround = backGround;
	  this.fontSize = fontSize;
	  this.textAlign = textAlign;
	}
	newDiv(name, text) {
		let div = document.createElement('div');
		div.className = '${name}';
		div.innerHTML = '${text}';
		div.height = this.height;
		div.width = this.width;
		div.backgroundColor = 'red';
		div.fontSize = this.fontSize;
		div.textAlign = this.textAlign;
	return div;
	}
};
const div = new options('10px', '10px', 'green', '100%', 'center');
console.log(div.newDiv('first', 'abrakadabra'));