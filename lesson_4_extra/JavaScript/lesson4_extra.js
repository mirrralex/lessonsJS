/*jshint esversion: 6 */
function getFriendlyNumbers(start, end) {
	let arrNumbers = [start],
			arrStart = [],
			arrEnd = [],
			number = 0,
			arrCalc = [number],
			startSum = 0,
			endSum = 0,
			arrFinish = [],
			canIDoSomething = false;

	if (isNaN(start) == false){
		if(isNaN(end) == false) {
			if(start > 0) {
				if(end > 0) {
					if(Number.isInteger(start) == true) {
						if(Number.isInteger(end) == true) {
							if(start < end){
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

	for(let i = 0; i < 20; i++) {

			number = number + 1;

			arrCalc[i] = number;

		}

	number = 0;
	
		for(let i = 1; i <= end; i++ ) {

			number = number + 1;

			arrNumbers[i] = number;

		}
	
		for(let i = 0; i < (arrNumbers.length - 1); i++ ){

			for(let j = 0; j < 20; j++){

				if(arrNumbers[i]%arrCalc[j] == 0) {

					arrStart[i] = arrNumbers[i];

					arrEnd[i] = arrNumbers[i];
				}
					console.log(arrStart[i] + "start");
					console.log(arrEnd[i] + "end");
			}
		}

		console.log(arrStart.length);

		for(let i = 0; i < arrStart.length; i++ ){

			for(let j = 0; j < arrEnd.length; j++){

				for(let z = 0; z < 50; z++){

					if (arrStart[i] < arrEnd[j]) {

						if (arrStart[i]%arrCalc[z]) {

							startSum = startSum + arrStart[i]/arrCalc[z];

						}

						if (startSum == arrEnd[j]) {

							if (arrEnd[j]%arrCalc[z]) {

								endSum = endSum + arrEnd[j]/arrCalc[z];
							}
						}
					}
				}
			}
		}
	}
}

getFriendlyNumbers(1,100);