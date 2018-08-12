/*jshint esversion: 6 */
let	name,
	money,
	time,
	empl,
	employer;


let mainList = {
	budget: 0,
	shopName: "",
	shopGoods: [],
	employers: { },
	employersNumb: 1,//Подсчет рбочих
	open: true,
	discount: false
};



function start() {//Функция для начала

	name = prompt("Название вашего магазина?").toUpperCase();

	money = prompt("Ваш бюджет на месяц?");

	while(isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?"); 
	}

	time = 21;


	

	return name, money, time;
}

function disSystem(price, discount) {//Дисконт подсчет
	if(discount == true){
		price = price * 100 / 80;
	}
	return price;
}

function employerHurrying(employerNumb){ //Найм рабочих

	empl = prompt("Введите имя сотрудника?","");
	
	employer = "ID" + employerNumb + " " + empl;

	employerNumb = 1+employerNumb;

	console.log(employer);
	console.log(employerNumb);

	return employerNumb;
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

	return shopGoods;
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
	return time;
}

//Подсчет бюджета
function oneDayBudget(budget){//Бюджет на один день
	return budget/30;
}
start();

mainList.shopName = name;

mainList.budget = money;

console.log(mainList.shopName);

console.log(mainList.budget);

for(let i=0; i<=3; i++) {
	mainList.employersNumb = employerHurrying(mainList.employersNumb);
	mainList.employers[i] = employer;
	
}

mainList.shopGoods = chooseGoods(mainList.shopGoods);

alert("Ваш бюджет на день: " + oneDayBudget(mainList.budget));