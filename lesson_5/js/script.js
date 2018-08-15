let point = document.getElementsByClassName("menu-item"),
		pointChanger;
		main = document.body.children[0];
		nav = main.children,
		ul = nav[0].childNodes,
		li = ul[1],
		body = document.getElementsByTagName("body"),
		
//Замена меню
pointChanger = point[1].innerHTML;

point[1].innerHTML = point[2].innerHTML;

point[2].innerHTML = pointChanger;
//Добавление пятого елемента
let newLi = document.createElement("li");

newLi.innerHTML = "Пятый элемент";

li.appendChild(newLi);

newLi.style.color = "#fff";

newLi.style.height = "40px";

newLi.style.lineHeight = "40px";

newLi.style.paddingRight = "15px";

newLi.style.paddingLeft = "15px";

newLi.style.border = "1px solid #fff";

newLi.style.borderRadius = "8px";

newLi.style.cursor = "pointer";

newLi.style.boxShadow = "0px 0px 20px  rgba(256,256,256,.4)";
//Замена бек фотки
document.body.style.background = "url(img/apple_true.jpg)";
//Замена заголовка
let newHeader = document.getElementsByClassName("title");

newHeader[0].innerHTML = "Мы продаем только подлинную технику Apple";
//Удаление рекламы
let adverisment = document.getElementsByClassName("adv");

body[0].children[2].removeChild(adverisment[0]);
//Вопрос о технике Apple
let quetion = prompt("Как вы относитесь к технике Apple?"),

		answer = document.getElementsByClassName("prompt");

answer[0].innerHTML = quetion;