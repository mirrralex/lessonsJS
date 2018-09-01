function model() {

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		moreDescription = document.getElementById('about');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	moreDescription.addEventListener('click', function(event) {
		let e = event.target.matches('div.description-btn');
		if(e == true){
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
		}
	});
}

module.exports = model();