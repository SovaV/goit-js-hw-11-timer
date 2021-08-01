const targetDate = new Date("Aug 29, 2021 07:00:40").getTime();
const CountdownTimer = setInterval(function () {
  let now = new Date().getTime();
  let time = targetDate - now;

  if (time >= 0) {
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    document.querySelector("[data-value='days']").innerHTML = days;

    document.querySelector("[data-value='hours']").innerHTML = (
      "0" + hours
    ).slice(-2);

    document.querySelector("[data-value='mins']").innerHTML = (
      "0" + mins
    ).slice(-2);

    document.querySelector("[data-value='secs']").innerHTML = (
      "0" + secs
    ).slice(-2);
  } else {
    document.getElementById("timer-1").innerHTML = "До Днюхи!";
  }
}, 1000);
