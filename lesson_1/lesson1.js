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
for (var i = 0; i<=2; i++){
mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", "");
}
var oneDayBudget = (mainList.budget)/30;

alert("Ваш бюджет на день: " + oneDayBudget);