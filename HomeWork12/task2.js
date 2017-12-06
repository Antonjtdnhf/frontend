var id = 1;
var xhr = new XMLHttpRequest();
xhr.open("GET", "ui.json", true);

xhr.onload = function() {
  var data = JSON.parse(this.responseText),
  i=0;
  while(1) {
    if (scroling.clientHeight < window.innerHeight + 100) {
      var div = document.createElement('div');
      scroling.appendChild(div);
      div.innerHTML += id + ". " + data[i % data.length].name + "   " + data[i % data.length].price + "   " + data[i % data.length].country;
      id++;
    } else
      break;
      i++;
  }
  var elementHeight = window.innerHeight;
  window.addEventListener("scroll", function() {

    if (scroling.getBoundingClientRect().bottom < elementHeight) {
      for (var i = 0; i < 20; i++) {
        var div = document.createElement('div');
        scroling.appendChild(div);
        div.innerHTML += id + ". " + data[i % data.length].name + "   " + data[i % data.length].price + "   " + data[i % data.length].country;
        id++;
      }
    }
  });
}

xhr.send(null);
