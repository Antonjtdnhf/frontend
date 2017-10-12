// Task 1
var city = ["city1", "city2", "city3", "city4", "city5", "city6", "city7", "city8", "city9", "city10"];
//var cityRandom = Math.floor(Math.random() * city.length);

var names = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9", "name10"];
//var nameRandom = Math.floor(Math.random() * names.length);

var gen = [];
for(var i = 0; i < names.length; i++){
	var human = {}
	gen[i] = human;
	human.name = names[Math.floor(Math.random() * names.length)];
	human.city = city[Math.floor(Math.random() * city.length)];
	human.age = Math.floor(Math.random()*100)
	human.print = function() {
		console.log("name: " + this.name + " city: " + this.city + " age: " + this.age);
	}
}

gen.forEach(function(elem) {
	return human.print();
})

function compareNumeric(aHuman, bHuman) {
  return bHuman.age - aHuman.age;
}
gen.sort(compareNumeric);

console.log(gen);
