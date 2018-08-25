/*jshint esversion: 6 */
class options {
	constructor(height, width, backGround, fontSize, textAlign) {
		this.height = height;
	  this.width = width;
	  this.backGround = backGround;
	  this.fontSize = fontSize;
	  this.textAlign = textAlign;
	}
	newDiv() {
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.backGround}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
		div.textContent = 'abrakadabra'
	}
};
let div = new options('100px', '500px', '#f0f0f0', '16px', 'center');

div.newDiv();