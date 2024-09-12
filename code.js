let timeModal = document.getElementById('timeModal');
let alertModal = document.getElementById('alertModal');
let closeBtns = document.querySelectorAll('.close');
let timeInputElem = document.getElementById('timeInput');

closeBtns.forEach((btn) => {
  btn.onclick = function() {
    timeModal.style.display = "none";
    alertModal.style.display = "none";
  };
});


function setTime() {
  timeModal.style.display = "flex"; 
}

function applyTime() {
  let timeSetByUser = parseInt(timeInputElem.value);
  if (!isNaN(timeSetByUser) && timeSetByUser > 0) {
    min = timeSetByUser;
    sec = 0;
    paused = false;
    const timerElem = document.getElementById('timer');
    timerElem.textContent = format(min, sec);
    clearInterval(timer);
    const pauseButton = document.querySelector('.control-buttons button');
    pauseButton.textContent = 'pause';
    start();
    timeModal.style.display = "none"; 
  } else {
    alert('Invalid time!');
  }
}


function showAlert() {
  alertModal.style.display = "flex"; 
}


function closeAlert() {
  alertModal.style.display = "none"; 
}


function update() {
  const timerElem = document.getElementById('timer');
  timerElem.textContent = format(min, sec);
  if (min == 0 && sec == 0) {
    clearInterval(timer);
    showAlert(); 
  } else if (!paused) {
    if (sec > 0) {
      sec--;
    } else {
      sec = 59;
      min--;
    }
  }
}
