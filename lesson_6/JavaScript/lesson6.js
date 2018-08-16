/*jshint esversion: 6 */
let mainList = {
	budget: 0,
	shopName: "",
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []
};

//Получение кнопку Открыть магзин
let openShopBtn = document.getElementById("open-btn"),
	//Все поля левого меню
	mainInfo = document.getElementsByClassName("main-info")[0],
	nameValue = document.getElementsByClassName("name-value")[0],
	budgetValue = document.getElementsByClassName("budget-value")[0],
	goodsValue = document.getElementsByClassName("goods-value")[0],
	itemsValue = document.getElementsByClassName("items-value")[0],
	employersValue = document.getElementsByClassName("employers-value")[0],
	discountValue = document.getElementsByClassName("discount-value")[0],
	isOpen = document.getElementsByClassName("isopen-value")[0],
	//Получение категорий товаров
	goodsItem = document.getElementsByClassName("goods-item"),
	//Получение трех кнопок
	buttonActions = document.getElementsByTagName("button"),
	applyButton = buttonActions[1],
	calculateButton = buttonActions[2],
	hireButton = buttonActions[3],
	//Получение полей ввода товаров, времени и расчеты бюджета
	fieldForGoods = document.querySelector(".main-functions .choose-item"),
	fieldForTime = document.querySelector(".main-functions .time-value"),
	fieldForBudget = document.querySelector(".main-functions .count-budget-value"),
	//Получение всех имен сотрудников
	hireEmployers = document.querySelectorAll(".hire-employers-item, .hire-employers-btn"),
	hireEmployer1 = hireEmployers[0],
	hireEmployer2 = hireEmployers[1],
	hireEmployer3 = hireEmployers[2];

let	money,
		fieldCheck;

fieldForTime.addEventListener('change', () => {
	time = fieldForTime.value;

	if (time < 0 ) {
				console.log('Такого не может быть!');
				mainList.open = false;
	} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time <= 24) {
				console.log('Уже слишком поздно, иди спать!');
				mainList.open = false;
				} else {
					console.log('В сутках только 24 часа!');
					mainList.open = false;
					}
	if(mainList.open == true){
		isOpen.style.backgroundColor = "green";
	} else {
		isOpen.style.backgroundColor = "red";
	}
});

openShopBtn.addEventListener('click', () => {

	nameValue.textContent = prompt("Название вашего магазина?").toUpperCase();

	money = prompt("Ваш бюджет на месяц?");

	while(isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?"); 
	}

	budgetValue.textContent = money;
	//Дисконт система
	let discount = false;

	discount = confirm("У вас дисконтный код?");

	mainList.discount = discount;

	if(mainList.discount == true) {

		discountValue.value = prompt("Введите ваш код");

		if(discountValue.value == "1111") {

			discountValue.style.backgroundColor = "green";

		} else {

			discountValue.style.backgroundColor = "red";
		}
	}
});
//Кнопка утверждения товаров
applyButton.addEventListener('click', () => {

	if(mainList.open == true){

	for (let i = 0; i < goodsItem.length; i++){

		if(goodsItem[i].value != null) {

			let things = goodsItem[i].value;

			if(typeof(things) === 'string' && typeof(things) != null && things.length < 50){

			mainList.shopGoods[i] = things;

			goodsValue.textContent = mainList.shopGoods;

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
	} else {
		alert("Магазин закрыт");
		}
});

fieldForGoods.addEventListener('change', () => {
	if(mainList.open == true){
		let items = fieldForGoods.value;

		if(isNaN(items) && items != ""){

			mainList.shopItems = items.split(",");
			
			mainList.shopItems.sort();

			itemsValue.textContent = mainList.shopItems;
		}
	} else {
		alert("Магазин закрыт");
	}
});

//Кнопка подсчета бюджета
fieldForBudget.readOnly = true;
calculateButton.addEventListener('click', () => {

	if(mainList.open == true){
		
		fieldForBudget.value = money / 30;

		} else {

					alert("Магазин закрыт");
					
			}
});

//Кнопка найма
hireButton.addEventListener('click', () => {

	if(mainList.open == true){

		for (let i = 0; i < hireEmployers.length; i++){

			if(hireEmployers[i].value != null) {

			let name = hireEmployers[i].value;

			mainList.employers[i] = name;

			employersValue.textContent += mainList.employers[i] + " ";
			}
		}
	} else {
		alert("Магазин закрыт");
		}
});