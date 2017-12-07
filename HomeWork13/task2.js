text.contentEditable = true;
bold.addEventListener('click', function () {
  document.execCommand("bold", false, null);
})

cursiv.addEventListener('click', function () {
  document.execCommand("italic", false, null);
})

underLine.addEventListener('click', function () {
  document.execCommand("underline", false, null);
})
size.oninput = function () {
  document.execCommand("fontsize", false, this.value);
}
fontFamily.oninput = function () {
  document.execCommand("fontname", false, this.value);
}

fontColor.oninput = function () {
  document.execCommand("forecolor", false, this.value);
}

backgroundColor.oninput = function () {
  document.execCommand("backcolor", false, this.value);
}
right.addEventListener('click', function () {
  document.execCommand("justifyright", false, null);
})
left.addEventListener('click', function () {
  document.execCommand("justifyleft", false, null);
})
centr.addEventListener('click', function () {
  document.execCommand("justifycenter", false, null);
})
full.addEventListener('click', function () {
  document.execCommand("justifyfull", false, null);
})
otsyp.addEventListener('click', function () {
  document.execCommand("indent", false, null);
})
minus.addEventListener('click', function () {
  document.execCommand("outdent", false, null);
})
href1.addEventListener('click', function () {
  document.execCommand("createlink", false, href.value);
})
clearInt.addEventListener('click', function () {
  document.execCommand("removeformat", false, null);
})
