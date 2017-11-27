//Task 1
var li = document.getElementsByTagName('li');

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener('click', function () {
    document.getElementsByTagName('body')[0].style.backgroundColor = this.innerHTML;
  })
}

document.addEventListener('contextmenu', function(e){
  e.preventDefault();
  menu.className = 'show';
  if (document.documentElement.clientWidth > e.offsetX + 200) {
    menu.style.left = e.offsetX;
  }else {
    menu.style.left = e.offsetX - 250;
  }
  if (document.documentElement.clientHeight > e.offsetY + 150) {
    menu.style.top = e.offsetY;
  }else {
    menu.style.top = e.offsetY - 200;
  }
})

document.addEventListener("click", function(){
	menu.className = '';
})
