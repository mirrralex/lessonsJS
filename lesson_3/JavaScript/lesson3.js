/*jshint esversion: 6 */
let mainList = {
	budget: 0,
	shopName: "",
	shopGoods: [],
	employers: {},
	open: true,
	discount: false
};
let employerNumb = 0;//Подсчет рбочих

let timeOfWork = 0;

function start(budget, shopName, timeOfWork) {//Функция для начала

	let money = prompt("Ваш бюджет на месяц?");

	while(isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?"); 
	}

	budget = money;

	let name = prompt("Название вашего магазина?").toUpperCase();

	shopName = name;

	let time = 21;

	timeOfWork = time;
}

function disSystem(price, discount) {//Дисконт подсчет
	if(discount == true){
		price = price * 100 / 80;
	}
	return price;
}

function employerHurrying(employerNumb){ //Найм рабочих
	
	let employer = employerNumb + " " + (prompt("Введите имя сотрудника?"));

	employerNumb = employerNumb + 1;

}

start(mainList.budget, mainList.shopName,timeOfWork);

for(let i=0; i<=2; i++) {
	mainList.employers[i] =  employerHurrying(employerNumb);
}

function chooseGoods(){//Товары для продажи

	for (let i = 0; i<=2; i++) {

		let things = prompt("Какой тип товаров будем продавать?");

		if(typeof(things) === 'string' && typeof(things) != null && things != '' && things.length < 50){
			
			console.log("Все верно!");

			mainList.shopGoods[i] = things;
		} else if(typeof(things) != null) {
						console.log("Ответ отменен");
						if(things != '') {
							console.log("Ответ пуст");
							if(typeof(things) === 'string') {
								console.log("Ответ не строка, пожалуйста введите хотя бы одну букву");
								if(things.length < 50) {
									console.log("Ответ превышает максимально допустимое значение, а именно 50");
								}
							}
						}
					}
	}
}

chooseGoods();

function workTime(time) {
	if (time < 0 ) {
		console.log('Ефкого не может быть!');
	} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			} else if (time < 24) {
				console.log('Уже слишком поздно, иди спать!');
				} else {
					console.log('В сутках только 24 часа!');
					}
}

//Подсчет бюджета
function oneDayBudget(budget){
	return budget/30; 
}
let dayBudget = oneDayBudget(mainList.budget);

alert("Ваш бюджет на день: " + oneDayBudget);