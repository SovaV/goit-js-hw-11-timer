class CountdownTimer {
  constructor({ date }) {
    this.timerId = null;
    this.date = date;
    this.startBtn = document.querySelector("#start");
    this.stopBtn = document.querySelector("#stop");
    this.sec = document.querySelector('.value[data-value="secs"]');
    this.min = document.querySelector('.value[data-value="mins"]');
    this.hours = document.querySelector('.value[data-value="hours"]');
    this.days = document.querySelector('.value[data-value="days"]');

    this.action = this.action.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  action() {
    const currentTime = Date.now();
    const time = this.date - currentTime;
    const sec = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.sec.textContent = sec < 10 ? `0${sec}` : sec;
    this.min.textContent = minutes < 10 ? `0${minutes}` : minutes;
    this.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.days.textContent = days < 10 ? `0${days}` : days;
  }

  start() {
    this.timerId = setInterval(this.action, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  init() {
    this.startBtn.addEventListener("click", this.start);
    this.stopBtn.addEventListener("click", this.stop);
  }
}

const timer = new CountdownTimer({
  date: new Date("Aug 29, 2021 07:00:40"),
});
timer.init();

// ================ Простой метод
// const refs = {
//   startBtn: document.querySelector("#start"),
//   stopBtn: document.querySelector("#stop"),
//   days: document.querySelector('.value[data-value="days"]'),
//   hours: document.querySelector('.value[data-value="hours"]'),
//   mins: document.querySelector('.value[data-value="mins"]'),
//   secs: document.querySelector('.value[data-value="secs"]'),
//   timers: document.getElementById("timer-1"),
// };
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
