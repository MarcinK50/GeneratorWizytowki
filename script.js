function downloadData() {
	let first = document.getElementById('first').value;
	let last = document.getElementById('last').value;
	let age = document.getElementById('age').value;
	let gender = document.getElementById('gender').value;
	let interest = document.getElementById('interest').value;
	
	person = new Person(first, last, age, gender, interest);
	
	let content = document.getElementById('content').innerHTML = 'Imię: ' + person.name.first + '<br /><br />' + 'Nazwisko: ' + person.name.last + '<br /><br />' + 'Wiek: ' + person.age + '<br /><br />' + 'Zainteresowanie: ' + person.interest;
}
function Person(first, last, age, gender, interest) {
	this.name = {
		first : first,
		last : last
	};
	this.age = age;
	this.gender = gender;
	this.interest = interest;
	this.bio = function() {
		alert(this.name.first + ' ' + this.name.last + ' ma ' + this.age + ' lat/lata. Lubi ' + this.interest + '.');
	};
	this.greeting = function() {
		alert('Cześć! Jestem ' + this.name.first + '.');
	};
	return this;
}