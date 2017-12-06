var canvas = document.getElementById('canvas');
var imageData,
  flag = true,
  imageDataTemp;
var context = canvas.getContext("2d");
var img = new Image();
img.src = 'dp.jpg';

img.onload = function() {
  context.drawImage(img, 0, 0, 500, 400);
  imageData = context.getImageData(0, 0, 500, 400);
  imageDataTemp = context.getImageData(0, 0, 500, 400);
  console.log(imageDataTemp);
}

negativ.addEventListener('click', function() {
  imageData = context.getImageData(0, 0, 500, 400);
  var pixels = imageData.data;
  for (var i = 0; i < pixels.length; i +=4) {

  pixels[i] = 255-pixels[i];
  pixels[i + 1] = 255-pixels[i+1];
  pixels[i + 2] = 255-pixels[i+2];

  }
  context.putImageData(imageData, 0, 0);
  flag = true;
})

blackAndWhite.addEventListener('click', function() {
  imageData = context.getImageData(0, 0, 500, 400);
  var pixels = imageData.data;
  for (var i = 0; i < pixels.length; i +=4) {
var gray = (pixels[i]+pixels[i+1]+pixels[i+2])/3;
  pixels[i] = gray;
  pixels[i + 1] = gray;
  pixels[i + 2] = gray;

  }
  context.putImageData(imageData, 0, 0);
  flag = true;
})

sepia.addEventListener('click', function() {
  imageData = context.getImageData(0, 0, 500, 400);
  if (flag) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
      var r = pixels[i];
      var g = pixels[i + 1];
      var b = pixels[i + 2];
      pixels[i] = (r * 0.393) + (g * 0.769) + (b * 0.189);
    }
    context.putImageData(imageData, 0, 0);
    flag = false;
  }
})

original.addEventListener('click', function () {
  context.putImageData(imageDataTemp, 0, 0);
  flag = true;
})
