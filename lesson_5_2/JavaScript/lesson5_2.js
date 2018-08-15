//Получение кнопку Открыть магзин
let OpenShopBtn = document.getElementById("open-btn"),
	//Все поля левого меню
	MainInfo = document.getElementsByClassName("main-info"),
	//Получение категорий товаров
	goodsValues = document.getElementsByClassName("goods-value"),
	//Получение трех кнопок
	buttonActions = document.getElementsByTagName("button"),
	//Получение полей ввода товаров, времени и расчеты бюджета
	fieldsForGTB = document.querySelector(".main-functions .choose-item", ".main-functions .time-value", ".main-functions .count-budget-value"),
	//Получение всех имен сотрудников
	hireEmployers = document.querySelectorAll(".main-functions .hire-employers", ".main-functions .hire-employers-item", ".main-functions .hire-employers-btn");