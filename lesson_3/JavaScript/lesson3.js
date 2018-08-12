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

let timeOfWork = 0;//Время работы

function start(budget, shopName, timeOfWork) {//Функция для начала

	let name = prompt("Название вашего магазина?").toUpperCase();

	let money = prompt("Ваш бюджет на месяц?");

	while(isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?"); 
	}

	let time = 21;

	shopName = name;

	budget = money;

	timeOfWork = time;
}

function disSystem(price, discount) {//Дисконт подсчет
	if(discount == true){
		price = price * 100 / 80;
	}
	return price;
}

function employerHurrying(employer, employerNumb){ //Найм рабочих
	
	employer = employerNumb + " " + (prompt("Введите имя сотрудника?"));

	employerNumb = employerNumb + 1;

}

function chooseGoods(shopGoods){//Товары для продажи

	for (let i = 0; i<=2; i++) {

		let things = prompt("Какой тип товаров будем продавать?");

		if(typeof(things) === 'string' && typeof(things) != null && things != '' && things.length < 50){
			
			console.log("Все верно!");

			shopGoods[i] = things;
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

function workTime(time) {
	if (time < 0 ) {
		console.log('Такого не может быть!');
	} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			} else if (time < 24) {
				console.log('Уже слишком поздно, иди спать!');
				} else {
					console.log('В сутках только 24 часа!');
					}
}

//Подсчет бюджета
function oneDayBudget(budget){//Бюджет на один день
	return budget/30; 
}

start(mainList.budget, mainList.shopName,timeOfWork);

for(let i=0; i<=3; i++) {
	employerHurrying(mainList.employers[i], employerNumb);
}

chooseGoods(mainList.shopGoods);

alert("Ваш бюджет на день: " + oneDayBudget(mainList.budget));