const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
   printMinutes();
   printSeconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  //btnLeft.setAttribute('button', 'STOP')
  //btnLeft.classList.add('stop')
  //btnLeft.innerText = "STOP"
}

function setSplitBtn() {
  //btnRight.setAttribute('button', 'SPLIT')
  //tnRight.classList.add('split')
  //btnRight.innerText = "SPLIT"
}

function setStartBtn() {
  //btnLeft.setAttribute('button', 'START')
  //btnLeft.classList.add('start')
  //btnLeft.innerText = "START"
}

function setResetBtn() {
  //btnRight.setAttribute('button', 'RESET')
  //btnRight.classList.add('reset')
  //btnRight.innerText = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('start')
  btnLeft.classList.toggle('stop')
  btnRight.classList.toggle('split')
  btnRight.classList.toggle('reset')
 


  if (btnLeft.classList[1] === 'stop' || btnRight.classList[1] === 'split'){
    chronometer.startClick(printTime)
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
  }
  else {
    chronometer.stopClick()
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if (btnRight.classList === 'split'){
    chronometer.resetClick()
  }
  else {
    chronometer.splitClick()
  }
});
