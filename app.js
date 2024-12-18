const digClock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  digClock.innerHTML = date.toLocaleTimeString();
}, 1000);
