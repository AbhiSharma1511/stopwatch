const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function Start() {
  // console.log("start button is work");
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  } else {
    window.alert("Timer is already running"); 
  }
}

function Stop() {
  // console.log("stop button is work");
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function Reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let second = Math.floor((elapsedTime / 1000) % 60);
  let mili = Math.floor((elapsedTime % 1000) / 10);

  hour = String(hour).padStart(2, 0);
  minute = String(minute).padStart(2, 0);
  second = String(second).padStart(2, 0);
  mili = String(mili).padStart(2, 0);

  display.textContent = `${hour}:${minute}:${second}:${mili}`;
}
