/*play.addEventListener("click", function () {
  song.play();
  play.style.display = "none"
  pause.style.display = "inline-block"
})
pause.addEventListener("click", function () {
  song.pause();
  play.style.display = "inline-block"
  pause.style.display = "none"
})
slower.addEventListener("click", function () {
  song.playbackRate = song.playbackRate * 0.8;
  //console.log(song.playbackRate);
})
faster.addEventListener("click", function () {
  song.playbackRate = song.playbackRate * 1.25;
  //console.log(song.playbackRate);
})
repeat.addEventListener("click", function () {

  //this.classList.add('active')
  if(this.className == "active" && song.loop == true){
    this.className = "all";
    song.loop = false;
  }
  else {
    this.className = "active";
      song.loop = true;
  }
})
volum.addEventListener("change", function () {
  song.volume = this.value / 100;
})
var divTiming = document.getElementsByClassName('timing');


song.addEventListener("loadedmetadata", function () {
  //var d = new Date(00:Math.floor(song.duration/60):MA(song.duration/60));
  timing.innerHTML = song.currentTime + "/" + (song.duration/60 + );
  console.log(song.currentTime + "/" + song.duration);
})*/

/*
.play()// запуск фоновой задачи запуска песни(когда загрузиться песня)
.pause()// пауза
.src// путь песни меняется (для плейлиста)
.controls// базовая панель
.volume// принимает число от 0 до 1(либо выдает)
.currentTime// количество секунд дробное c начало песни
.duration// количество секунд всей песни
.muted// если true звук отключен
.playbackRate// положительное число по умолчанию 1, скорость воспроизведения
.loop// если true песня будет воспроводиться бесконечно
loadeddata// когда был загружен достаточный кусок песни что бы воспроизвести
loadedmetadata// когда были загружены мета данные
pause// пауза
play// начало воспроизведения
volumechange// изменение громкости


.videoWidth// оригинальный размер
.videoHeight
.Width// указывает размеры
.height
*/
var timer,
  dragFlag = true,
  track = 0,
  saveVolume,
  songin;


  var data;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "ui.json", true);
  xhr.onload = function() {
    playList.innerHTML = '';
    data = JSON.parse(this.responseText);
    data.forEach(function(item) {
      console.log(item);
      playList.innerHTML += '<div class="song" data-url="' + item.url + '" ><span class="songName">' + item.songName + ' - ' + item.groupName + '</span></div>'

    })

    playSong(0);
    songin = document.getElementsByClassName('song');
    songin[0].classList.add('active');
addTextImg(0);
    Array.from(songin).forEach(function(item, i) {
      item.addEventListener('click', function() {
        if (i != track) {
          playSong(i);
          this.classList.add('active');
          songin[track].classList.remove('active');
          track = i;
          playPause.classList.remove('fa-play');
          playPause.classList.add('fa-pause');
addTextImg(i);
          song.onloadedmetadata =  function() {
            sliderStart();
            song.play();
            song.onloadedmetadata =''
          }

        }
      })
    })

  }
  xhr.send(null);


playPause.addEventListener('click', function() {
  playPause.classList.toggle('fa-play');
  playPause.classList.toggle('fa-pause');
  playPauseSong();
})

slower.addEventListener("click", function() {
  song.playbackRate = song.playbackRate * 0.8;
  console.log(song.playbackRate);
})
faster.addEventListener("click", function() {
  song.playbackRate = song.playbackRate * 1.25;
  console.log(song.playbackRate);
})
stop1.addEventListener("click", function() {
  currentTimeSong.innerHTML = "00:00";
  playPause.classList.add('fa-play');
  playPause.classList.remove('fa-pause');
  song.pause();
  song.currentTime = 0;
  clearInterval(timer);
  theSlider.style.width = '0%'
  //playPause.classList.add('fa-play');
  //playPause.classList.remove('fa-pause');
})



function addTextImg(x) {
  playerNameSong.innerHTML = '<div><span style="background-size:cover;background-repeat:no-repeat;border-radius:50%;width:60px;height:60px; margin-right:15px; vertical-align: -8px;background-image:url('+data[x].img+');display:inline-block"></span><span style="display:inline-block"><div style = "font-size: 20px; font-width: bold;">' + data[x].songName + '</div><div style = "font-size: 14px; color: rgb(203, 203, 203);">' + data[x].groupName + '</div><div style = "font-size: 14px;">' + data[x].albumName + '</div></span></div>'

}

function playPauseSong() {
  if (playPause.classList.contains('fa-pause')) {
    song.play();
    sliderStart();

  } else {
    song.pause();
    clearInterval(timer);
  }
}

volume.addEventListener('click', function() {
  if (volume.classList.contains('fa-volume-off')) {
    setVolume(saveVolume);
  } else {
    saveVolume = song.volume * 100;
    setVolume(0);
  }
  volume.classList.toggle('fa-volume-off');
  volume.classList.toggle('fa-volume-up');
})


function sliderStart() {
  var currentSlider;
  allTimeSong.innerHTML = minuteSecond(song.duration);
  timer = setInterval(function() {
    currentSlider = song.currentTime * 100 / song.duration;
    if (dragFlag) theSlider.style.width = currentSlider + '%';
    currentTimeSong.innerHTML = minuteSecond(song.currentTime);
    if (song.duration == song.currentTime) {
      if (data.length == track+1) {
        console.log("qweer");
        songin[track].classList.remove('active');
        track=0;
        playSong(track);
        songin[0].classList.add('active');
addTextImg(0);
        song.pause();
        playPause.classList.add('fa-play');
        playPause.classList.remove('fa-pause');
      }else{
        songin[track].classList.remove('active');
        track++;
        playSong(track);
        songin[track].classList.add('active');
addTextImg(track);
        song.addEventListener("loadedmetadata", function() {
          sliderStart();
          song.play();
        })
      }
    }
  }, 1000)
}

function minuteSecond(secs) {
  var hoursDiv = secs / 3600,
    hours = Math.floor(hoursDiv),
    minutesDiv = secs % 3600 / 60,
    minutes = Math.floor(minutesDiv),
    seconds = Math.ceil(secs % 3600 % 60);
  if (seconds > 59) {
    seconds = 0;
    minutes = Math.ceil(minutesDiv);
  }
  if (minutes > 59) {
    minutes = 0;
    hours = Math.ceil(hoursDiv);
  }
  return (hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0' + hours + ':' : hours + ':') + (minutes.toString().length < 2 ? '0' + minutes : minutes) + ':' + (seconds.toString().length < 2 ? '0' + seconds : seconds);
}

timeLineWrap.addEventListener('mousedown', function() {
  var x;
  dragFlag = false;
  document.onmousemove = function rewind(e) {
    e.preventDefault();
    if (e.clientX - theSlider.getBoundingClientRect().left > 500) x = 100;
    else x = (e.clientX - theSlider.getBoundingClientRect().left) * 1 / 5;
    theSlider.style.width = x + '%';
  }
  document.onmouseup = function stoped(e) {
    e.preventDefault();
    if (e.clientX - theSlider.getBoundingClientRect().left > 500) x = 100;
    else x = (e.clientX - theSlider.getBoundingClientRect().left) * 1 / 5;
    theSlider.style.width = x + '%';
    song.currentTime = song.duration * x / 100;
    document.onmousemove = '';
    document.onmouseup = '';
    dragFlag = true
  }
})

repeat.addEventListener('click', function() {
  song.loop = song.loop ? false : true;
  this.classList.toggle('active');
})

volumeLineWrap.addEventListener('mousedown', function() {
  var x;
  volume.classList.remove('fa-volume-off');
  volume.classList.add('fa-volume-up');
  document.onmousemove = function rewind(e) {
    e.preventDefault();
    if (e.clientX - theSliderVolume.getBoundingClientRect().left > 100) x = 100;
    else
    if (e.clientX - theSliderVolume.getBoundingClientRect().left < 0) x = 0;
    else
      x = (e.clientX - theSliderVolume.getBoundingClientRect().left);
    setVolume(x);
  }
  document.onmouseup = function stoped(e) {
    e.preventDefault();
    if (e.clientX - theSliderVolume.getBoundingClientRect().left > 100) x = 100;
    else
    if (e.clientX - theSliderVolume.getBoundingClientRect().left < 0) x = 0;
    else
      x = (e.clientX - theSliderVolume.getBoundingClientRect().left);
    setVolume(x);
    document.onmousemove = '';
    document.onmouseup = '';
  }
})

function setVolume(x) {
  theSliderVolume.style.width = x + '%';
  song.volume = x / 100;
}


function playSong(x) {
  var link = playList.children[x].getAttribute('data-url');
  song.src = link;
}






/*
song.onloadeddata = function () {
  console.log(true);
}*/
