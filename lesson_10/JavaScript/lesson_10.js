/*jshint esversion: 6 */
class options {
	constructor(height, width, backGround, fontSize, textAlign, text) {
		this.height = height;
	  this.width = width
	  this.backGround = backGround;
	  this.fontSize = fontSize;
	  this.textAlign = textAlign;
	  this.text = text;
	}
	newDiv() {
		let div = document.createElement('div');
		div.textContent = this.text;
		div.style.height = this.height;
		div.style.width = this.width;
		div.style.backgroundColor = this.backGround;
		div.style.fontSize = this.fontSize;
		div.style.textAlign = this.textAlign;
		document.body.appendChild(div);
	}
};
let div = new options('50px', '600px', '#f0f0f0', '16px', 'center', 'abrabrabra');
div.newDiv();