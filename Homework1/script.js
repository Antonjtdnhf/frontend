/*var N1 = prompt("Enter N");
var arr2 = new Array;
for(var i=0; i<=N1; i++ ){
	arr2[i]=Math.round(Math.random()*(150-50)+50);
}
function polynomial(arr,x){
	var s=0;
for(var i=0; i<=arr.length - 1; i++){
       s=s+arr[i]*Math.pow(x,i);
	}
return(s);
}
var x = prompt("Enter x");
	console.log(arr2);
	console.log(polynomial(arr2,x));*/




var a = new Date();

var y = a.getFullYear();
var m = a.getMonth();
var d = a.getDate();
d = d + 1;
var b = new Date(y, m, d, 0, 0, 0);
var time =Math.round((b.getTime() - a.getTime()) / (1000 * 60));

alert(time + "minutes to the end of the day ");
