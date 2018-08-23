/*jshint esversion: 6 */
let options = class {
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
		div.textContent = '${text}';
		div.height = this.height;
		div.width = this.width;
		div.backgroundColor = 'red';
		div.fontSize = this.fontSize;
		div.textAlign = this.textAlign;
	}
};
let div = new options('10px', '10px', 'red', '100%', 'center');
div.newDiv('first', 'abrakadabra');