class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerEl = document.querySelector(selector);
    this.targetDate = targetDate;
    this.sec = this.timerEl.childNodes[7].childNodes[1];
    this.min = this.timerEl.childNodes[5].childNodes[1];
    this.hours = this.timerEl.childNodes[3].childNodes[1];
    this.days = this.timerEl.childNodes[1].childNodes[1];
  }
  start = setInterval(() => {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    this.action(time);
    this.stop(time);
  }, 1000);

  action(time) {
    const sec = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.sec.textContent = sec < 10 ? `0${sec}` : sec;
    this.min.textContent = minutes < 10 ? `0${minutes}` : minutes;
    this.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.days.textContent = days < 10 ? `0${days}` : days;
  }

  stop(time) {
    if (time <= 0) {
      clearInterval(this.start);
    }
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 10, 2021 13:10:40"),
});
