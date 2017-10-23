// Task 2
document.write('<style>span{font-size:70px;font-weight:bold}#timer{text-align:center}</style><div id="timer"><span id="hour"></span><span class="separator">:</span><span id="minute"></span><span class="separator">:</span><span id="second"></span></div>')


var currentdata = new Date(),
  hour = 23 - currentdata.getHours(),
  minute = 59 - currentdata.getMinutes(),
  second = 59 - currentdata.getSeconds(),
  obj_hour = document.getElementById('hour'),
  obj_minute = document.getElementById('minute'),
  obj_second = document.getElementById('second'),
  obj_sep = document.getElementsByClassName('separator');

refresh('hour');
refresh('minute');
refresh('second');


var timerId = setInterval(function() {

  if (second == 0) {
    if (minute == 0) {
      if (hour == 0) {
        clearInterval(timerId);
        console.log('Конец!');
      } else {
        hour--;
        minute = 59;
        second - 59;
        refresh('hour');
        refresh('minute');
        refresh('second');
      }
    } else {
      minute--;
      second = 59;
      refresh('minute');
      refresh('second');
    }
  } else {
    second--;
    refresh('second');
  }

  for (var i = 0; i < obj_sep.length; i++) {
    obj_sep[i].style.opacity = '0';
  }
  setTimeout(function() {
    for (var i = 0; i < obj_sep.length; i++) {
      obj_sep[i].style.opacity = '1';
    }
  }, 300)

}, 1000)



function refresh(a) {
  switch (a) {
    case 'second':
      obj_second.innerHTML = second.toString().length < 2 ? "0" + second.toString() : second;
      break;
    case 'minute':
      obj_minute.innerHTML = minute.toString().length < 2 ? "0" + minute.toString() : minute;
      break;
    case 'hour':
      obj_hour.innerHTML = hour.toString().length < 2 ? "0" + hour.toString() : hour;
      break;
  }
}
