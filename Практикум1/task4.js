var td = document.getElementsByTagName("td"),
  out = document.getElementById("output"),
  back = document.getElementById("backspace"),
  operatop = "+",
  enter = true,
  temp = "0",
  systemNumber = "dec",
  memory = "";
system = document.getElementById('radiobutton').getElementsByTagName('input');
for (var i = 0; i < system.length; i++) {
  system[i].addEventListener("focus", function() {
    changesys(this.value);
  })
}
dec();

back.addEventListener("click", function() {
  if (out.innerHTML == "error") out.innerHTML = "";
  out.innerHTML = out.innerHTML.substring(0, out.innerHTML.length - 1);
})
for (var i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function() {
    if (this.className !== "active") {
      clickbut(this.innerHTML);
    }
  })
}

function clickbut(type) {
  if(type == "MR") readMemory();
  if(type == "MS") saveMemory();
  if ((type == "sin" || type == "asin" || type == "cos" || type == "acos" ||
      type == "tan" || type == "atan" || type == "x<sup>2</sup>" || type == "x<sup>3</sup>" ||
      type == "√" || type == "ln" || type == "«1") && out.innerHTML.length > 0) {
    trigonometryPower(type);
  }
  if (type == "π" || type == "e" || type == "log<sub>2</sub>e" ||
    type == "log<sub>e</sub>10") {
    constant(type);
  }
  if (type <= "9" && type >= "0" || type == "." || type == "A" ||
    type == "B" || type == "C" || type == "D" || type == "E" || type == "F") outadd(type);
  if (type == "c") clear();
  if (out.innerHTML != "error") {
    if (type == "+" || type == "-" || type == "*" || type == "/" || type == "x<sup>y</sup>" ||
      type == "log<sub>a</sub>b" || type == "Reference system" || type == "«") {
      if (out.innerHTML.length > 0)
        calc(type);
      else
        operatop = type;
    }
    if (type == "=") output();
  }
}

function calc(x) {
  if ((out.innerHTML == "0" || out.innerHTML == "") && operatop == "/") {
    operatop = "+";
    temp = "0";
    out.innerHTML = "error";
  } else {
    switch (operatop) {
      case "+":
        temp = +temp + (+out.innerHTML);
        break;
      case "-":
        temp = +temp - (+out.innerHTML);
        break;
      case "*":
        temp = +temp * (+out.innerHTML);
        break;
      case "/":
        temp = +temp / (+out.innerHTML);
        break;
      case "x<sup>y</sup>":
        temp = Math.pow(+temp, +out.innerHTML);
        break;
      case "log<sub>a</sub>b":
        temp = Math.log(out.innerHTML) / Math.log(temp);
        break;
      case "Reference system":
        temp = temp.toString(out.innerHTML);
        break;
        case "«":
          temp = temp << out.innerHTML;
          break;

    }
    out.innerHTML = "";
    operatop = x;
  }
}

function trigonometryPower(x) {
  enter = false;
  switch (x) {
    case "sin":
      if(out.innerHTML == Math.PI){
        out.innerHTML = 0;
      }
      out.innerHTML = Math.sin(out.innerHTML);
      break;
    case "asin":
      out.innerHTML = Math.asin(out.innerHTML);
      break;
    case "cos":
      out.innerHTML = Math.cos(out.innerHTML);
      break;
    case "acos":
      out.innerHTML = Math.acos(out.innerHTML);
      break;
    case "tan":
    if(out.innerHTML == Math.PI){
      out.innerHTML = 0;
    }
      out.innerHTML = Math.tan(out.innerHTML);
      break;
    case "atan":
      out.innerHTML = Math.atan(out.innerHTML);
      break;
    case "x<sup>2</sup>":
      out.innerHTML = Math.pow(out.innerHTML, 2);
      break;
    case "x<sup>3</sup>":
      out.innerHTML = Math.pow(out.innerHTML, 3);
      break;
    case "√":
      out.innerHTML = Math.sqrt(out.innerHTML);
      break;
    case "ln":
      out.innerHTML = Math.log(out.innerHTML);
      break;
      case "«1": console.log(1234);
        out.innerHTML = +out.innerHTML << 1;
        break;
  }
}

function output() {
  calc("+");
  if (out.innerHTML != "error") out.innerHTML = temp;
  temp = "0";
  enter = false;
}

function outadd(x) {
  if (out.innerHTML == "error") out.innerHTML = "";
  if (x == "." && checkpoint(out.innerHTML)>0){
    return false;
  }
  else{
    if (enter)
    out.innerHTML += x;
    else {
      out.innerHTML = x;
      enter = true;
    }
  }
}

function clear() {
  operatop = "+";
  temp = "0";
  out.innerHTML = "";
}

function constant(x) {
  enter = false;
  switch (x) {
    case "π":
      out.innerHTML = Math.PI;
      break;
    case "e":
      out.innerHTML = Math.E;
      break;
    case "log<sub>2</sub>e":
      out.innerHTML = Math.LOG2E;
      break;
    case "log<sub>e</sub>10":
      out.innerHTML = Math.LOG10E;
      break;
  }
}

function changesys(x) {
  switch (x) {
    case "bin":
      bin();
      break;
    case "oct":
      oct();
      break;
    case "dec":
      dec();
      break;
    case "hex":
      hex();
      break;
  }
  if (out.innerHTML !== "") {
    enter = false;
    switch (x) {

      case "bin":
        bin();
        if (systemNumber == "oct") {
          console.log(1);
          out.innerHTML = parseInt(out.innerHTML, 8).toString(2);
        }
        if (systemNumber == "dec") {
          out.innerHTML = parseInt(out.innerHTML, 10).toString(2);
          console.log(2);
        }
        if (systemNumber == "hex") {
          out.innerHTML = parseInt(out.innerHTML, 16).toString(2);
          console.log(3);
        }

        break;
      case "oct":
        oct();
        if (systemNumber == "dec") {
          out.innerHTML = parseInt(out.innerHTML, 10).toString(8);
        }
        if (systemNumber == "bin") {
          out.innerHTML = parseInt(out.innerHTML, 2).toString(8);
        }
        if (systemNumber == "hex") {
          out.innerHTML = parseInt(out.innerHTML, 16).toString(8);
        }
        break;
      case "dec":
        dec();
        if (systemNumber == "oct") {
          console.log(1);
          out.innerHTML = parseInt(out.innerHTML, 8).toString(10);
        }
        if (systemNumber == "bin") {
          out.innerHTML = parseInt(out.innerHTML, 2).toString(10);
        }
        if (systemNumber == "hex") {
          out.innerHTML = parseInt(out.innerHTML, 16).toString(10);
        }
        break;
      case "hex":
        hex();
        if (systemNumber == "oct") {
          console.log(1);
          out.innerHTML = parseInt(out.innerHTML, 8).toString(16);
        }
        if (systemNumber == "bin") {
          out.innerHTML = parseInt(out.innerHTML, 2).toString(16);
        }
        if (systemNumber == "dec") {
          out.innerHTML = parseInt(out.innerHTML, 10).toString(16);
        }
        break;

    }
  }
  systemNumber = x;
}

function bin() {
  for (var i = 0; i < td.length; i++) {
    if (td[i].innerHTML <= "9" && td[i].innerHTML >= "2" || td[i].innerHTML == "A" ||
      td[i].innerHTML == "B" || td[i].innerHTML == "C" || td[i].innerHTML == "D" ||
      td[i].innerHTML == "E" || td[i].innerHTML == "F") {
      td[i].classList.add('active');

    }
  }
}

function dec() {
  for (var i = 0; i < td.length; i++) {
    if (td[i].innerHTML <= "9" && td[i].innerHTML >= "2") {
      td[i].classList.remove('active');
    }
    if (td[i].innerHTML == "A" ||
      td[i].innerHTML == "B" || td[i].innerHTML == "C" || td[i].innerHTML == "D" ||
      td[i].innerHTML == "E" || td[i].innerHTML == "F") {
      td[i].classList.add('active');
    }
  }
}

function oct() {
  for (var i = 0; i < td.length; i++) {
    if (td[i].innerHTML <= "7" && td[i].innerHTML >= "2") {
      td[i].classList.remove('active');
    }
    if (td[i].innerHTML == "A" ||
      td[i].innerHTML == "B" || td[i].innerHTML == "C" || td[i].innerHTML == "D" ||
      td[i].innerHTML == "E" || td[i].innerHTML == "F" || td[i].innerHTML == "9" ||
      td[i].innerHTML == "8") {
      td[i].classList.add('active');
    }
  }
}

function hex() {
  for (var i = 0; i < td.length; i++) {
    if (td[i].innerHTML <= "9" && td[i].innerHTML >= "2" || td[i].innerHTML == "A" ||
      td[i].innerHTML == "B" || td[i].innerHTML == "C" || td[i].innerHTML == "D" ||
      td[i].innerHTML == "E" || td[i].innerHTML == "F") {
      td[i].classList.remove('active');
    }
  }
}

function saveMemory() {
  memory = out.innerHTML;
}

function readMemory() {
  if (memory != "") {
    out.innerHTML = memory;
  }else {
    out.innerHTML = 0;
  }
}

function checkpoint(x){
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    if(x[i] == "."){
      count++;
      break;
    }
  }
  return count;
}
