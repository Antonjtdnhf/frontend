/*var a = new Date();
var y = a.getFullYear();
var m = a.getMonth();
var d = a.getDate();
d = d + 1;
var b = new Date(y, m, d, 0, 0, 0);
var time =Math.round((b.getTime() - a.getTime()) / (1000 * 60));

alert(time,"minutes to the end of the day ");*/
// дата


/*var arr=prompt("Enter the coefficients").split(" ")
arr.push(prompt("Enter x"));
var Sum=summa(arr);
console.log(" , at x = "+arr[arr.length-1]+" equals "+Sum);

function summa(arr) {
	var x=arr[arr.length - 1];
	var Sum=0;
	for (var i = 0; i < arr.length - 1; i++) {
		if (i==0) {
			console.log("("+arr[i]+")"+" * x^"+i+" ")
			Sum+=Number(arr[i])*Math.pow(x,i);
		}
		else{
			console.log("+ ("+arr[i]+")"+" * x^"+i+" ")
		Sum+=Number(arr[i])*Math.pow(x,i);
		}
	}
	return Sum;
}*/ //задание номер 2
