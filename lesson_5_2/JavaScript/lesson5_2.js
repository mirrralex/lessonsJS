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
	isOpene = document.getElementsByClassName("isopen-value")[0],
	//Получение категорий товаров
	goodsValues = document.getElementsByClassName("goods-value")[0],
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
	hireEmployer3 = hireEmployers[2],
	hireEmployerBtn = hireEmployers[3];