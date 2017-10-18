// Task 2
var telephone = prompt("Enter phonenumber: ");
var tel = (/[\+]?375(\(|\-|\s)?(29|33|44|25)(\)|\-|\s)?\d{3}(\-|\s)?\d{2}(\-|\s)?\d{2}/);

if(tel.test(telephone)){
	alert("easy");
}
else{
	alert("Error!!!");
}
