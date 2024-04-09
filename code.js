let timer;
let min = 30;
let sec = 0;
let paused = false;
let timeSetByUser = null;

function format() {
  return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}
function pauseUnpause() {
  const pauseButton = document.querySelector('.control-buttons button');
  paused = !paused;
  if (paused == true) {
    clearInterval(timer);
    pauseButton.textContent = 'unpause';
  } else {
    start();
    pauseButton.textContent = 'pause';
  }
}
function start() {
  timer = setInterval(update, 1000);
}
function update() {
  const timerElem = document.getElementById('timer');
  timerElem.textContent = format(min, sec);
  if (min == 0 && sec == 0) {
    clearInterval(timer);
    alert('time\'s up !!');
  } else if (paused == false) {
    if (sec > 0) {
      sec--;
    } else {
      sec = 59;
      min--;
    }
  }
}
function restart() {
  clearInterval(timer);
  min = timeEntered || 30;
  sec = 0;
  paused = false;
  const timerElem = document.getElementById('timer');
  timerElem.textContent = format(min, sec);
  const pauseButton = document.querySelector('.control-buttons button');
  pauseButton.textContent = 'pause'; 
  start(); 
}
function setTime() {
  const timeSetByUser = prompt('Enter time (in minutes):');
  if (!isNaN (timeSetByUser) && timeSetByUser > 0)
  {
    timeEntered = parseInt(timeSetByUser);
    min = timeSetByUser;
    sec = 0;
    paused = false;
    const timerElem = document.getElementById('timer');
    timerElem.textContent = format(min, sec);
    clearInterval(timer);
    const pause = document.querySelector('.control-buttons button');
    pause.textContent = 'pause';
    start();
  } else {
    alert('invalid time!!');
  }
}
start;
