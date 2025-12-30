let timerDispaly = document.getElementById("timer");

// Update every second
setInterval(
	function updateTimer() {
  const currentDate = new Date();
  timerDispaly.innerHTML = currentDate.toLocaleString();
}, 1000
)

udpadeTimer();
