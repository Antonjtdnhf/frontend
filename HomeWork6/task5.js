var tel = (/^[\+]?375(\(|\-|\s)?(29|33|44|25)(\)|\-|\s)?\d{3}(\-|\s)?\d{2}(\-|\s)?\d{2}$/),
  name1 = (/^[a-zA-Zа-яА-Яё\-\s]{3,20}$/),
  age1 = (/^[0-9]{2}$/),
  mail = (/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/),
  sitepattern = (/^(http:\/\/|https:\/\/)?([a-z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,4}\/?$/);
var input = document.getElementsByTagName("input"),
  timer;
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("keydown", function(e) {
    var temp = this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      check(temp);
    }, 500);
  })
}
var span = document.getElementsByTagName("span");

function check(x) {
  switch (x.name) {
    case "name":
      if (name1.test(nam.value)) {
        span[0].style.display = "none"
      } else {
        span[0].style.display = "inline"
      }
      break;
    case "email":
      if (mail.test(email.value)) {
        span[2].style.display = "none"
      } else {
        span[2].style.display = "inline"
      }
      break;
    case "site":
      if (sitepattern.test(site.value)) {
        span[3].style.display = "none"
      } else {
        span[3].style.display = "inline"
      }
      break;
    case "telephone":
      if (tel.test(phone.value)) {
        span[1].style.display = "none"
      } else {
        span[1].style.display = "inline"
      };
      break;
    case "age":
      if (age1.test(age.value) && age.value > 13 && age.value < 91) {
        span[4].style.display = "none"
      } else {
        span[4].style.display = "inline"
      };
      break;
  }
}
button.addEventListener("click", function () {
  var count=0;
  for (var i = 0; i < input.length; i++) {
    check(input[i]);
  }
  for (var i = 0; i < span.length; i++) {
    if(span[i].style.display == "none")count++;
  }
  if(count==5)alert("OK!")
})
