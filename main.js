

var clock = document.querySelector('.clock');
var time = document.querySelector('.time');

function zero(x){
  if(x < 10){
    x = '0' + x;
  }
  return x;
}
function army(x){
  if( x > 12){
    x = x - 12;
  }
  return x;

}

function currentTime(){

var currentDate = new Date();
var hours = zero(army(currentDate.getHours()));
var minutes = zero(currentDate.getMinutes());
var seconds = zero(currentDate.getSeconds());
var color = "#" + hours + minutes + seconds;
time.innerHTML = color;
var timer = setInterval(function(){currentTime()}, 1000)
time.style.backgroundColor= color;

}
currentTime();



