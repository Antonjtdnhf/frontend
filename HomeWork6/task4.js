// Task4
var td = document.getElementsByTagName('td'),
  memory = "0",
  operation = "+",
  memory2 = "";
for (var i = 1; i < td.length; i++) {
  td[i].addEventListener("click", function(elem) {
    calc(elem.srcElement.innerHTML);
  })
}

function calc(x) {
	if (x == "c") {
			td[0].innerHTML = "";
			operation = "+";
			memory = "0";
  }
  if (x <= "9" && x >= "0" || x == ".") {
    out(td[0].innerHTML += x);
  }
  if (memory == "error") {
    td[0].innerHTML = "error";
  } else {
    switch (x) {
      case "+":
        memory = functionName();
        operation = x;
        td[0].innerHTML = "";
        console.log(memory);
        break;
      case "-":
        memory = functionName();
        operation = x;
        td[0].innerHTML = "";
        console.log(memory);
        break;
      case "*":
        memory = functionName();
        operation = x;
        td[0].innerHTML = "";
        console.log(memory);
        break;
      case "/":
        memory = functionName();
        operation = x;
        td[0].innerHTML = "";
        console.log(memory);
        break;
      case "=":
        memory = functionName();
        out2();
        break;
      case "MS":
        memory2 = td[0].innerHTML;
        break;
      case "MR":
        td[0].innerHTML = memory2;
        break;
    }
  }

}

function out(x) {
  td[0].innerHTML = x;
}

function out2() {
  td[0].innerHTML = memory;
}

function functionName() {
  switch (operation) {
    case "+":
      return +td[0].innerHTML + (+memory);
      td[0].innerHTML = "";
      break;
    case "-":
      return +memory - (+td[0].innerHTML);
      td[0].innerHTML = "";
      break;
    case "*":
      return +memory * (+td[0].innerHTML);
      td[0].innerHTML = "";
      break;
    case "/":
      if (td[0].innerHTML == "0" || td[0].innerHTML == "") {
        return "error";
      } else {
        return +memory / (+td[0].innerHTML);
        td[0].innerHTML = "";
      }
      break;
  }
}
