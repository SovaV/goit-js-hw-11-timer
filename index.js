class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.targetDate = targetDate;
    this.selector = selector;
    this.timerContainer = document.querySelector(selector);
    this.days = this.timerContainer.children[0].children[0];
    this.hours = this.timerContainer.children[1].children[0];
    this.min = this.timerContainer.children[2].children[0];
    this.sec = this.timerContainer.children[3].children[0];
    this.startBtn = this.timerContainer.children[4].children[0];
    this.stopBtn = this.timerContainer.children[4].children[1];

    this.action = this.action.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
  start() {
    this.timerId = setInterval(this.action, 1000);
  }

  action() {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    const sec = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.sec.textContent = sec < 10 ? `0${sec}` : sec;
    this.min.textContent = minutes < 10 ? `0${minutes}` : minutes;
    this.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.days.textContent = days < 10 ? `0${days}` : days;
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
  selector: "#timer-1",
  targetDate: new Date("Aug 12, 2021 13:10:40"),
});
timer.init();
