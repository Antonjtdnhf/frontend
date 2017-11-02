var tel = (/[\+]?375(\(|\-|\s)?(29|33|44|25)(\)|\-|\s)?\d{3}(\-|\s)?\d{2}(\-|\s)?\d{2}/);
var input = document.getElementsByTagName("input"),
timer;
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("keydown", function(e) {
    var temp = this,
    key = e.key,
    keyc = e.code;
    if (this.name == "name" && (key < "А" || key > "Я") && (key < "а" || key > "я") &&
    (key < "a" || key > "z") && (key < "A" || key > "Z") &&
    keyc != "Space" && keyc != "Backspace" && key != "-"  )
    {
      e.preventDefault();
    }
    if (this.name == "phone" && (key <= "0" || key >= "9") &&
    keyc != "Space" && keyc != "Backspace" && key != "-" && key != "(" && key != ")" &&
    key != "+")
    {
      e.preventDefault();
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      check(temp);
    }, 500);
  })
}

function check(x) {
  switch (x.name) {
    case "name":
    if (x.value.length > 3 && x.value.length < 20) {
      console.log("ok");
    }else {
      console.log("Error");
    }
      break;
    case "email":

      break;
    case "site":

      break;
    case "telephone":
      if (tel.test(phone.value)){
        console.log("ok")
      }else {
        console.log("Error");
      };
      break;
    case "age":

      break;

  }



}
