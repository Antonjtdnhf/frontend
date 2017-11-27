var li = document.getElementsByClassName('li');
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener('click', function (e) {
e.stopPropagation();
    if(e.target.className == "li"){e.target.className = 'li show';}
    else{e.target.className = 'li';}

  })
}
