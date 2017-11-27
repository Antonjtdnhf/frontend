var button = document.getElementsByClassName('button'),
  currentwidget = 0,
  currentselect;
var currentX, currentY, globalurl;

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function() {
    if (currentwidget) {
      document.getElementById(currentwidget).className = 'button';
    }
    this.className = 'active button';
    currentwidget = this.id;
    showProperty(currentwidget);
  });
}
clear.addEventListener('click', function() {
  workplace.innerHTML = "";
});
workplace.addEventListener('mousedown', function(e) {
if(e.which != 1)return false;
  if (currentwidget != 'select') {
    e.preventDefault();
    currentX = e.x - 10, currentY = e.y - 10;
    CreateWidget(currentwidget, e.x - 10, e.y - 10);
  }
});
workplace.addEventListener('mousemove', function(e) {

  if (window.workplaceElementCurrentEdit) {
    e.preventDefault();
    if (e.x - 10 - currentX < 0) {
      workplaceElementCurrentEdit.style.right = workplace.offsetWidth - parseInt(workplaceElementCurrentEdit.style.left) + 'px';
      workplaceElementCurrentEdit.style.left = "";
    } else {
      workplaceElementCurrentEdit.style.left = workplace.offsetWidth - parseInt(workplaceElementCurrentEdit.style.right) + 'px';
      workplaceElementCurrentEdit.style.right = "";
    }
    if (e.y - 10 - currentY < 0) {
      workplaceElementCurrentEdit.style.bottom = workplace.offsetHeight - parseInt(workplaceElementCurrentEdit.style.top) + 'px';
      workplaceElementCurrentEdit.style.top = "";
    } else {
      workplaceElementCurrentEdit.style.top = workplace.offsetHeight - parseInt(workplaceElementCurrentEdit.style.bottom) + 'px';
      workplaceElementCurrentEdit.style.bottom = "";
    }

    resize(Math.abs(currentX - e.x + 10), Math.abs(currentY - e.y + 10));

  }

}, true);
document.addEventListener('mouseup', function(e) {
  e.preventDefault();
  if (window.workplaceElementCurrentEdit) {
    currentselect = workplaceElementCurrentEdit;
    readProperty(currentwidget);
    workplaceElementCurrentEdit.removeAttribute('id');
  }

});

function resize(x, y) {
  workplaceElementCurrentEdit.style.width = x + "px";
  workplaceElementCurrentEdit.style.height = y + "px";
}

function CreateWidget(w, x, y) {
  var div = document.createElement('div');
  switch (w) {
    case "circle":
      div.setAttribute('id', 'workplaceElementCurrentEdit');
      div.style.width = 10 + "px";
      div.style.height = 10 + "px";
      div.className = "workplaceElement circle";
      break;
    case 'square':
      div.setAttribute('id', 'workplaceElementCurrentEdit');
      div.style.width = 10 + "px";
      div.style.height = 10 + "px";
      div.className = "workplaceElement square";
      break;
    case 'text':
      div.setAttribute('id', 'workplaceElementCurrentEdit');
      div.innerHTML = 'Введите текст';
      div.contentEditable = true;
      div.className = "workplaceElement text";
      break;
    case 'imagine':
      div.setAttribute('id', 'workplaceElementCurrentEdit');
      div.style.backgroundImage = "url("+globalurl+")";
      div.className = "workplaceElement image";
      break;
  }
  div.style.left = x + "px";
  div.style.top = y + "px";
  workplace.appendChild(div);
  div.addEventListener('click', function() {
    if (currentwidget == 'select') selectWidget(this);
  });
}

function proper(a, b, c, d, e, f) {
  var resultProperty = '<div class="">Свойства</div>';
  if (a) resultProperty += '<div class="wrapperProperties"> <label for="">X:</label><input type="text" id="cordinatX"><label for="">Y:</label> <input type="text" id="cordinatY"> </div>'
  if (b) resultProperty += '<div class="wrapperProperties"><label>Ширина:</label><input type="text" id="elementWidth"><label>Высота:</label> <input type="text" id="elementHeight"></div>'
  if (c) resultProperty += '<div class="wrapperProperties"><label>Размер текста:</label><input type="text" id="fontSize"></div>  <div class="wrapperProperties"><select class="" name="" id="shrift"><option value="">Шрифт</option><option value="">Arial</option><option value="">Arial Black</option><option>Comic Sans MS</option><option>Georgia</option><option>Courier New</option><option>Times New Roman</option><option>Impact</option></select></div>'
  if (d) resultProperty += '<div class="wrapperProperties" id="loadingWrap"><input placeholder="Выберите изображение" type="file" id="loading" accept=".jpg, .jpeg, .png"></div>'
  if (e) resultProperty += '<div class="wrapperProperties"><label for="">Цвет фона</label><input type="text" id="color"></div><div class="wrapperProperties"><label for="">Цвет обводки</label><input type="text" id="colorBorder"><br><br><label for="">Размер обводки:</label><input type="text" id="borderSize"></div>'
  if (f) resultProperty += '<div class="wrapperProperties"><label for="">Прозрачность:</label><input type="text" id="opacity"></div>'
  resultProperty += '<br><br><button type="buttom" id="change">Изменить</button>'
  properties.innerHTML = resultProperty;
  properties.style.display = "block";
  change.addEventListener("click", function() {
    writeProperty();
  })
  if (d) loading.onchange = function() {
    addImage(this);
  };
}

function addImage(x) {
  var files = x.files || x.currentTarget.files;
  var reader = [];
  var name;
  for (var i in files) {
    if (files.hasOwnProperty(i)) {
      name = 'file' + i;
      reader[i] = new FileReader();
      reader[i].readAsDataURL(x.files[i]);
      (function(name) {
        reader[i].onload = function(e) {
          globalurl = e.target.result;
          loadingWrap.innerHTML += "<div class='preview' style='background-image:url("+globalurl+")'></div>";
        };
      })(name);
    }
  }
}

function showProperty(x) {
  switch (x) {
    case "circle":
      proper(1, 1, 0, 0, 1, 1);
      break;
    case "square":
      proper(1, 1, 0, 0, 1, 1);
      break;
    case "imagine":
      proper(1, 1, 0, 1, 0, 1);
      break;
    case "text":
      proper(1, 0, 1, 0, 0, 1);
      break;
  }
}

function readProperty(x) {
  cordinatY.value = parseInt(getComputedStyle(currentselect).top) || parseInt(getComputedStyle(workplace).height) - parseInt(getComputedStyle(currentselect).height) - parseInt(getComputedStyle(currentselect).bottom);
  cordinatX.value = parseInt(getComputedStyle(currentselect).left) || parseInt(getComputedStyle(workplace).width) - parseInt(getComputedStyle(currentselect).width) - parseInt(getComputedStyle(currentselect).right);
  opacity.value = getComputedStyle(currentselect).opacity;

  if (x == 'circle' || x == 'square' || x == 'imagine') {
    elementWidth.value = currentselect.offsetWidth;
    elementHeight.value = currentselect.offsetHeight;
  }
  if (x == 'text') {
    fontSize.value = getComputedStyle(currentselect).fontSize;
  }
  if (x == 'imagine') {}
  if (x == 'circle' || x == 'square') {
    color.value = getComputedStyle(currentselect).backgroundColor;
    borderSize.value = getComputedStyle(currentselect).borderTopWidth;
    colorBorder.value = getComputedStyle(currentselect).borderColor;
  }
}

function selectWidget(x) {
  currentselect = x;

  showProperty(
    (function () {
      if(x.classList.contains('circle'))return "circle";
      if(x.classList.contains('square'))return "square";
      if(x.classList.contains('image'))return "imagine";
      if(x.classList.contains('text'))return "text";
    })()
  );
  readProperty(  (function () {
      if(x.classList.contains('circle'))return "circle";
      if(x.classList.contains('square'))return "square";
      if(x.classList.contains('image'))return "imagine";
      if(x.classList.contains('text'))return "text";
    })());
}

function writeProperty() {
  currentselect.style.top = cordinatY.value + 'px';
  currentselect.style.left = cordinatX.value + 'px';
  currentselect.style.right = "";
  currentselect.style.bottom = "";
  currentselect.style.opacity = opacity.value;

  if (currentwidget == 'circle' || currentwidget == 'square' || currentwidget == 'imagine') {
    currentselect.style.width = elementWidth.value + 'px';
    currentselect.style.height = elementHeight.value + 'px';
  }
  if (currentwidget == 'text') {
    fontSize.value = getComputedStyle(currentselect).fontSize;
  }
  if (currentwidget == 'imagine') {}
  if (currentwidget == 'circle' || currentwidget == 'square') {
    currentselect.style.backgroundColor = color.value;
    currentselect.style.borderWidth = borderSize.value;
    currentselect.style.borderColor = colorBorder.value;
  }
}
