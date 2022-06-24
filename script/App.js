let [milliseconds, second, minute, hour] = [0, 0, 0, 0];
let int = null;

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");

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
  timerRef.innerHTML = "00 : 00 : 00";
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
      }
    }
  }
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}
