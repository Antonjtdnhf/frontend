// Task 2
var inp = document.getElementsByTagName("input")[0];
  inp.addEventListener("keydown", function(e) {
		//console.log(this.name);
		var temp = this,
		key = e.key,
		keyc = e.code;
		if (this.name == "telephone" && (key < "0" || key > "9") &&
    keyc != "Space" && keyc != "Backspace" && key != "-" && key != "+")
    {
      e.preventDefault();
    }
	})
