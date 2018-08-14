/*jshint esversion: 6 */
function getFriendlyNumbers(start, end) {
	let arrNumbers = [start],
		arrStart = [],
		arrEnd = [],
		number = 0,
		arrCalc = [number];
		canIDoSomething = false;

	if (isNumber(start) == true ){
		if(isNumber(end) == true) {
			if(start < 0) {
				if(end < 0) {
					if(isInteger(start) == true) {
						if(isInteger(end) == true) {
							if(start > end){
								canIDoSomething = true;
							} else {
								alert("Start не может быть больше End");
							}
						} else {
							alert("End должен быть целым числом");
						}
					} else {
							alert("Start должен быть целым числом");
						}
				} else {
				alert("End должен быть положительным");
			}
			} else {
				alert("Start должен быть положительным");
			}
		} else {
			alert("Введите цифры в end");
		}
	} else {
		alert("Введите цифры в start");
	}

	if(canIDoSomething == true){
	for(let i = 0; i <= 49; i++) {
			arrCalc[i] = number + 1;
		}
	
		for(let i = 1; i <= end; i++ ) {
			arrNumbers[i] = arrNumbers[i] + 1;
		}
	
		for(let i = 0; i <= (arrNumbers.length - 1); i++ ){
			for(let j = 0; j <=49; j++){
	
			}
		}
	}
}