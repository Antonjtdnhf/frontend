var settings = {
  "#hash1": "hash1.html",
  "#hash2": { path: "hash2.html",
	spisok: function() {
    button.addEventListener('click', function(){
      var x = input.value;
      alert(x);
    })
	}
},
  "#hash4": "hash4.html",
  "#hash5": "hash5.html",
  "#hash3": { path: "hash3.html",
	spisok: function() {
    first.addEventListener('click', function(){
      spisok1.classList.toggle('active');
    })
	}
}
}

var change = function() {
  var path = settings[location.hash].path || settings[location.hash];
  var xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  xhr.onload = function() {
    one.innerHTML = this.responseText;
    if((location.hash == "#hash3") || (location.hash == "#hash2"))
		{
			settings[location.hash].spisok();
		}
  }
  xhr.send(null);
}


window.onhashchange = function() {
  change();
}
if (location.hash in settings) {
  change();
}




/*var d=document.getElementById("d");

var settings = {
	"#link1": { path: "1.html",
	handle: function() {
		var li = document.getElementById("01");
	    var ul = document.getElementById('menu1');
		li.addEventListener("click", function(e) {
			ul.classList.toggle("open");
		});
	} },
	"#link2" : { path: "2.html",
	handle: function() {
		var inp = document.getElementsByClassName('inp');
		var but = document.getElementById('b');
		but.addEventListener("click", function() {
			var sum = Number(inp[0].value)+Number(inp[1].value);
			inp[2].value=sum;
		});
	} },
	"#link3" : "3.html",
	"#link4" : "4.html",
	"#link5" : "5.html"
}


var change = function() {

	var path = settings[location.hash].path || settings[location.hash];

	var xhr = new XMLHttpRequest();
	xhr.open("GET", path, true);
	xhr.onload = function() {
		d.innerHTML = this.responseText;
		if((location.hash == "#link1") || (location.hash == "#link2"))
		{
			settings[location.hash].handle();
		}
	}
	xhr.send(null);
}

window.onhashchange = function() {
	change();
}
if(location.hash in settings) {
	change();
}*/
