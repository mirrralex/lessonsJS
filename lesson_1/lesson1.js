var mainList = {
	budget: 0,
	shopName: "",
	shopGoods: [],
	employers: {},
	open: true
};
budget=prompt("Ваш бюджет на месяц?");
mainList.budget = budget;
shopName = prompt("Название вашего магазина?");
mainList.shopName = shopName;
for (var i = 1; i<=3; i++){
shopGoods = prompt("Какой тип товаров будем продавать?", "");
}
var oneDayBudget = (mainList.budget)/30;

alert("Ваш бюджет на день: " + oneDayBudget);