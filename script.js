/*var a = prompt("Enter exampl:");
alert(eval(a));*/
//// калькулятор


/*var count = 0;
var a = prompt("Enter example:");
for (var i = 0; i < a.length; i++) {
  if (a[i] == '(') {
    count++;
  }
  else if (a[i] == ')') {
    count--;
  }

  if (count < 0) {
    alert("There is no opening bracket!")
    break;
  }
}

if (count > 0) {
  alert("No closing parenthesis!")
}
else if(count == 0){
  alert("OK!")
}*/
////Правильность растовки круглых скобок


function factorial(b) {
  var result = 1;
  for(var i = 1; i <= x; i++){
    result = result * i;
  }
  return result;
}

var x = prompt ("Enter x:") ;
var n = prompt ("Enter n:") ;
var sum = 0;

for (var i = 0; i < n; i++) {
  sum = factorial(factorial(2*n - 1)) / factorial(2*n) * (Math.pow(x, 2*n - 1)/(2*n + 1));
  sum += sum;
}
alert(x+sum);
//// ряд Тейлора формула может не правильна
