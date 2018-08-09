let mainList = {
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

var i = 0;

/*while ( i < 3) {
		let things = prompt("Какой тип товаров будем продавать?");

	if(typeof(things) === 'string' && typeof(things) != null && things != '' && things.length < 50){	
		
					console.log("Все верно!");

					mainList.shopGoods[i] = things;

		} else if(typeof(things) === null) {
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
	i++;
}*/

/*do {
		let things = prompt("Какой тип товаров будем продавать?");

	if(typeof(things) === 'string' && typeof(things) != null && things != '' && things.length < 50){	
		
					console.log("Все верно!");

					mainList.shopGoods[i] = things;

		} else if(typeof(things) === null) {
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
	i++;
}
while (i<3);*/

let oneDayBudget = (mainList.budget)/30;

alert("Ваш бюджет на день: " + oneDayBudget);