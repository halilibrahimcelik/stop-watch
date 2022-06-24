let [milliseconds, second, minute, hour] = [0, 0, 0, 0];
let int = null;

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const hourSpan = document.querySelector(".time__hour");
const minuteSpan = document.querySelector(".time__minute");
const secondSpan = document.querySelector(".time__second");
const milisecondSpan = document.querySelector(".time__miliseconds");
startBtn.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(countdown, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(int);
});
resetBtn.addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, second, minute, hour] = [0, 0, 0, 0];
  hourSpan.innerText = "00";
  minuteSpan.innerText = "00";
  secondSpan.innerText = "00";
  milisecondSpan.innerText = "00";
});
function countdown() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    second++;
    if (second == 60) {
      second = 0;
      minute++;
      if (minute == 60) {
        minute = 0;
        hour++;
      }
    }
  }
  let minuteText = minute < 10 ? "0" + minute : minute;
  let secondText = second < 10 ? "0" + second : second;
  let msText =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  hourSpan.innerText = hour;
  minuteSpan.innerHTML = minuteText;
  secondSpan.innerHTML = secondText;
  milisecondSpan.innerHTML = msText;
}
