/*jshint esversion: 6 */
let str = "урок-3-был слишком легким";
//С большой буквы
strFirst = str[0].toUpperCase();

var strNotFirst = "";

for(let i = 1; i<=(str.length-1); i++) {

	strNotFirst = strNotFirst + str[i];

}

str = strFirst + strNotFirst;

//Замена - на пробел
var strWithSpaces = "";

for(let i = 0; i<=(str.length-1); i++){

	if (str[i] == "-"){

		strWithSpaces = strWithSpaces + str[i].replace("-", " ");

	} else {

		strWithSpaces = strWithSpaces + str[i];

		}
}

str = strWithSpaces;

console.log(str);

//Замена легкий на пустоту 
str = str.replace(" легким", "");

//Замена последних двух символов на о 
let lastLetter = str.length-1;

str = str.replace(str[lastLetter], "о");

str = str.replace(str[lastLetter-1], "о");

console.log(str);

//Высчитывание массива 
let arr = [20, 33, 1, "Человек", 2, 3];

let sum = 0;

for (let i = 0; i <= arr.length-1; i++) {
	
	let numb = arr[i];

	let sumNumb = 0;

	for (let j = 0; j <= numb.length-1; j++) {

	numb = numb.charCodeAt(j);

	numb = parseInt(numb, 10);

	sumNumb = sumNumb + numb;

	}

	sum = sum + sumNumb;

	numb = Math.pow(numb, 3);

	sum = sum + numb;

	}
	console.log(Math.sqrt(sum));

	//Функция сокращающая текст
	function textCutter() {
		let text =  prompt("Введите текст", "");
		while (typeof(text) != 'string' && text != null && text != ""){
			prompt("Введите текст а не цифры", "");
		}
		console.log(text);
		if (text.length >= 20){
			text = (text.substring(0 , 10)).replace(/ /g, "")+text.slice(10,-10)+(text.substring((text.length-10))).replace(/ /g, "");
			if (text.length >= 50){
				text = text.slice(0, 49) + "...";
			}
		} 
		console.log(text);
	}
	textCutter();