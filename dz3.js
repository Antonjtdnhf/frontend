/*var names = ["Aleksandr", "Dasha", "Vova","Katya","Olya","Igor","Vasia","Misha","Nikita"];
var cities = ["Baranovichi", "Brest", "Gomel", "Vitebsk", "Mogilev"]
var rand = [];

for(var i = 0; i < names.length; i++){
	var human = {};
	rand[i] = human;
	human.name = names[Math.floor(Math.random() * (names.length))];
	human.city = cities[Math.floor(Math.random() * (cities.length))];
	human.age = Math.floor(Math.random()*100);
	human.print = function(){
		console.log("name: " + this.name + ", city: " + this.city + ", age: " + this.age);
	}
}
console.log(rand);

var rand1 = rand.concat();
rand1.sort(function(h1, h2){
	return h2.age - h1.age;
})
console.log(rand1);

rand1.forEach(function(elem){
	elem.print();
}) */  // Первое задание



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var
bookkeeping = {
};
var people = [
	{
		name: "Roma",
		age: 20,
		department: "aaa",
		experience: 7.5,
		salary: 1000
	},
	{
		name: "Dasha",
		age: 19,
		department: "bbb",
		experience: 5.5,
		salary: 2300
	},
	{
		name: "Denis",
		age: 26,
		department: "ddd",
		experience: 24,
		salary: 2300
	},
	{
		name: "Vika",
		age: 18,
		department: "ccc",
		experience: 8.4,
		salary: 1200
	}
]

people.forEach(function(elem){
	elem.print = function(){
		console.log("name: " + this.name + " department: " + this.department + " salary: " + this.salary);
	}
})
bookkeeping.employees = people;

bookkeeping.addOrDel = function(param){
	if(typeof(param) == "object" && param != null){
		bookkeeping.employees[bookkeeping.employees.length] = param;
		console.log(bookkeeping);
	}
	if(typeof(param) == "string"){
		bookkeeping.employees = bookkeeping.employees.filter(function(elem){
			return elem.name!=param;
		})
	}
}//удаление. добавление.


//.addOrDel("Vika");
//var a ={};
//bookkeeping.addOrDel(a);


bookkeeping.sortSalary = function(){
	bookkeeping.employees.sort(function(emp1, emp2){
		return emp1.salary > emp2.salary? 1: -1;
	});
	bookkeeping.employees.forEach(function(elem){
		elem.print();
	})
}


bookkeeping.sortSalary();


bookkeeping.sumSalary = function(arr){
	var sum = arr.reduce(function(prev, curr){
		return prev + curr.salary;
	}, 0);
	return sum;
}


console.log("The full salary = " + bookkeeping.sumSalary(bookkeeping.employees));
bookkeeping.sumSalary(bookkeeping.employees);


bookkeeping.MaxMinAverageSalary = function(){
	var arrSalary = [];
	bookkeeping.employees.forEach(function(elem){
		arrSalary.push(elem.salary);
	})

	var maxSalary = Math.max.apply(Math, arrSalary);
	var peopleWithMaxSalary = bookkeeping.employees.filter(function(elem){
		return elem.salary==maxSalary;
	})
	console.log("Peple with max salary: ");
	peopleWithMaxSalary.forEach(function(elem){
		elem.print();
	})

	var minSalary = Math.min.apply(Math, arrSalary);
	var peopleWithMinSalary = bookkeeping.employees.filter(function(elem){
		return elem.salary==minSalary;
	})
	console.log("Peple with min salary: ");
	peopleWithMinSalary.forEach(function(elem){
		elem.print();
	})

	console.log("The average salary = " + bookkeeping.sumSalary(bookkeeping.employees)/bookkeeping.employees.length);
}


bookkeeping.MaxMinAverageSalary();


console.log(bookkeeping.employees);// второе задание
