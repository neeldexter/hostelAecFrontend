export function startTimer(duration) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (--timer < 0) {
      timer = duration;
    }
    return minutes + ":" + seconds;
  }, 1000);
}
