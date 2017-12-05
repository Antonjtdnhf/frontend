var context = canvas.getContext("2d");
var x = 0,
y = 0,
flag = false;
context.strokeStyle = "#000";




canvas.addEventListener('mousemove', function(e){
	if(flag){
		x = x_;
		y = y_;
		context.moveTo(x, y);
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();
		x_ = e.offsetX;
		y_ = e.offsetY;
	}
});


canvas.addEventListener('mousedown', function(e){
	flag = true;
	x_ = e.offsetX;
	y_ = e.offsetY;
});
canvas.addEventListener('mouseup', function(){
	flag = false;
});
