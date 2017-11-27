// Task 2
var pos = divs.offsetTop;
console.log(pos);


window.onscroll = function () {
  if (window.pageYOffset >= pos) {
    divs.className = "fixed menu";
  }else{
    divs.className = "menu";
  }
}
