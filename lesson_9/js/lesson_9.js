let age = document.getElementById('age'),
	surname = 'Лесников',
	name = 'Вася';
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

age.addEventListener('change', function(){
	showUser.call(age, name, surname);
});

