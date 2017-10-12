// Task 2
var buh = {};

var man = [{name: "1111", age: 11, departament: "aaa", experience: 11, salary: 1000},
{name: "2222", age: 22, departament: "bbb", experience: 22, salary: 2000},
{name: "3333", age: 33, departament: "ccc", experience: 33, salary: 3000},
{name: "4444", age: 44, departament: "ddd", experience: 44, salary: 4000}
]

man.forEach(function(elem){
	elem.print = function () {
		console.log("name: " + this.name + " age: " + this.age + " department: " + this.department + " salary: " + this.salary + " experience: " + this.experience);
	}
})

buh.people = man;
//console.log(buh.people);

buh.addMan = function(elem){
	if(typeof(elem) == "object"){
		man.push(elem);
	}
}
//var x = {};
//buh.addMan(x);
//console.log(buh.people);

buh.deleteMan = function(elem){
	if(typeof(elem) == "string"){
		buh.people = buh.people.filter(function (elem1) {
			return elem1.name!= elem;
		})
	}
}

//buh.deleteMan("1111");
//console.log(buh.people);

buh.sortirovka = function () {
	buh.people.sort(function (x, y) {
		return y.salary - x.salary
	})
	buh.people.forEach(function(elem){
		elem.print();
	})
}

//buh.sortirovka();


buh.sumSalary = function(x){
	var sum = x.reduce(function(a, b){
		return b + a.salary;
	}, 0);
	return console.log("Summa: " + sum);;
}

buh.sumSalary();
