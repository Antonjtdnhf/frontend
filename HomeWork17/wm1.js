var context = canvas.getContext("2d");

var x = 0,
  y = 0,
  x_,
  y_,
  flag = false;
context.strokeStyle = "#000";

(function create() {
  if (localStorage.x) {
    var xx = localStorage.x.split(',');
    var yy = localStorage.y.split(',');
    xx.pop();
    yy.pop();
    console.log(xx);
    console.log(yy);

    xx.forEach(function(e, i) {
      if (i % 2 == 0) {
        x = xx[i];
        y = yy[i];
        context.moveTo(x, y);
        context.lineTo(xx[i + 1], yy[i + 1]);
        context.stroke();
      }
    })


  }
})()



canvas.addEventListener('mousemove', function(e) {
  if (flag) {
    x = x_;
    y = y_;
    context.moveTo(x, y);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    x_ = e.offsetX;
    y_ = e.offsetY;
    if (!localStorage.y) localStorage.y = '';
    if (!localStorage.x) localStorage.x = '';
    localStorage.y += y + ',' + e.offsetY + ",";
    localStorage.x += x + ',' + e.offsetX + ",";
  }
});

canvas.addEventListener('mousedown', function(e) {
  flag = true;
  x_ = e.offsetX;
  y_ = e.offsetY;
});
canvas.addEventListener('mouseup', function() {
  flag = false;
});
