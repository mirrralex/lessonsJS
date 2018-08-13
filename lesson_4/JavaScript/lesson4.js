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
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(shopGoods){//Товары для продажи

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
	},
	workTime: function workTime(time) {
		if (time < 0 ) {
				console.log('Такого не может быть!');
			} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
					} else if (time < 24) {
						console.log('Уже слишком поздно, иди спать!');
						} else {
							console.log('В сутках только 24 часа!');
							}
		return time;
	},
	oneDayBudget: function oneDayBudget(budget){//Бюджет на один день
		return budget/30;
	},
	disSystem: function disSystem(price, discount) {//Дисконт подсчет
		if(discount == true){
			price = price * 100 / 80;
		}
		return price;
	},
	employerHurrying: function employerHurrying(employerNumb){ //Найм рабочих
	
		empl = prompt("Введите имя сотрудника?","");
		
		employer = "ID" + employerNumb + " " + empl;
	
		employerNumb = 1+employerNumb;
	
		return employerNumb;
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую ваши товары", "");

		while(typeof(items) != 'string' && typeof(items) === null && items === ""){
			items = prompt("Перечислите через запятую ваши товары", "");
		}

		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще ", ""));
		mainList.shopItems.sort();
		document.write("У нас вы можете купить: <br>");
		mainList.shopItems.forEach(function(item, i, arr) {
		document.write((i+1) + " " +  arr[i] + "<br>" );
		});
		console.log("Наш магазин включает в себя:");
		for(let key in mainList.shopItems) {
			console.log(mainList.shopItems[key]);
		}
	}

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

start();

mainList.shopName = name;

mainList.budget = money;

console.log(mainList);