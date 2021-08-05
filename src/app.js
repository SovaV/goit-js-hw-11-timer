const refs = {
  startBtn: document.querySelector("#start"),
  stopBtn: document.querySelector("#stop"),
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
  timers: document.getElementById("timer-1"),
};

class CountdownTimer {
  constructor(date) {
    this.date = date;
  }
}
const time = new CountdownTimer("Jul 17, 2020");

let watchId = null;
let startDate = null;
let result = null;
let seconds = null;
let minutes = null;

function timer() {
  result = Math.floor((new Date() - startDate) / 1000);
  seconds = result % 60;
  minutes = Math.floor(result / 60);
  refs.secs.textContent = seconds < 10 ? `0${seconds}` : seconds;
  refs.mins.textContent = minutes < 10 ? `0${minutes}` : minutes;
}

function startWhatch() {
  startDate = new Date();
  watchId = setInterval(timer, 1000);
}

function stopWhatch() {
  clearInterval(watchId);
}
refs.startBtn.addEventListener("click", startWhatch);
refs.stopBtn.addEventListener("click", stopWhatch);

// ================ Простой метод

// const targetDate = new Date("Aug 29, 2021 07:00:40").getTime();
// const CountdownTimer = setInterval(function () {
//   let date = new Date().getTime();
//   let time = targetDate - date;

//   if (time >= 0) {
//     let days = Math.floor(time / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     let secs = Math.floor((time % (1000 * 60)) / 1000);

//     document.querySelector("[data-value='days']").innerHTML = days;

//     document.querySelector("[data-value='hours']").innerHTML = (
//       "0" + hours
//     ).slice(-2);

//     document.querySelector("[data-value='mins']").innerHTML = (
//       "0" + mins
//     ).slice(-2);

//     document.querySelector("[data-value='secs']").innerHTML = (
//       "0" + secs
//     ).slice(-2);
//   } else {
//     document.getElementById("timer-1").innerHTML = "До Днюхи!";
//   }
// }, 1000);
