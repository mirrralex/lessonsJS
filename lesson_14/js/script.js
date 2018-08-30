/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../js/tab.js'),
			calculator = require('../js/calculator.js'),
			model = require('../js/model.js'),
			learnMoreTab = require('../js/learn_more_tab.js'),
			slider = require('../js/slider.js'),
			timer = require('../js/timer.js');

	tab();
	calculator();
	model();
	learnMoreTab();
	slider();
	timer();
});