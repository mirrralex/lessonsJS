//Calculator
function calculator() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daySum = 0,
		daySumArr = [],
		personsSumArr = [],
		alterniteTotal = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() {
		personsSum = this.value;
		if (restDays.value == '' || restDays.value == 0) {
			totalValue.innerHTML = 0;	
		} else if (personsSum != '' && (personsSum - 1 + 1) % 1 == 0 && personsSum != 'e' && personsSum != 0) {
			personsSumArr.unshift(personsSum);
			alterniteTotal = (daySumArr[0] + personsSumArr[0]) * 4000;
			total = (daySum + personsSum) * 4000;
			if (total == 0){
				totalValue.innerHTML = alterniteTotal;
				} else {
				totalValue.innerHTML = total;
				}
			} else if (((personsSum-1+1)%1) == 0) {
				if (total == 0 && alterniteTotal == 0){
					alert('Введите целые числа');
				}
			}  else {
					totalValue.innerHTML = 0;
					alert('Введите целое количество людей');
				}
	});

	restDays.addEventListener('change', function() {
		daySum = this.value;
		if (persons.value == '' || persons.value == 0) {
			totalValue.innerHTML = 0;	
		} else if (daySum != '' && (daySum - 1 + 1) % 1 == 0 && daySum != 'e' && daySum != 0) {
			daySumArr.unshift(daySum);
			alterniteTotal = (daySumArr[0] + personsSumArr[0]) * 4000;
			total = (daySum + personsSum) * 4000;
			if (total == 0){
				totalValue.innerHTML = alterniteTotal;
			} else {
				totalValue.innerHTML = total;
				}
			} else if (((daySum-1+1)%1) == 0) {
				if (total == 0 && alterniteTotal == 0){
					alert('Введите целые числа');
				}
			} else {
					totalValue.innerHTML = 0;
					alert('Введите целое количество дней');
				}
	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0 || restDays.value == 'e' || persons.value == 'e') {
			totalValue.innerHTML = 0;
		} else {

			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}

	});
}

module.exports = calculator();