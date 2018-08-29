/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../js/parts/tab.js'),
			calculator = require('../js/parts/calculator.js'),
			model = require('../js/parts/model.js'),
			learnMoreTab = require('../js/parts/learn_more_tab.js'),
			slider = require('../js/parts/slider.js'),
			timer = require('../js/parts/timer.js');

	tab();
	calculator();
	model();
	learnMoreTab();
	slider();
	timer();
	
});