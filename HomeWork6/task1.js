// Task 1
var inputOrigin = document.getElementById("string");
var inputCipher = document.getElementById("cipher");
var but = document.getElementById("button");
var butCipher = document.getElementById("buttonCipher")

but.addEventListener("click", function () {
  var x = inputOrigin.value;
  var newString = "";
  for (var i = 0; i < x.length; i++) {
    newString += String.fromCharCode(x[i].charCodeAt(0) + 2);
  }
  inputCipher.value = newString;
})

butCipher.addEventListener("click", function () {
  var x = inputCipher.value;
  var newString = "";
  for (var i = 0; i < x.length; i++) {
    newString += String.fromCharCode(x[i].charCodeAt(0) - 2);
  }
  inputOrigin.value = newString;
})
