let timerDispaly = document.getElementById("timer");

function updateTimer() {
  const currentDate = new Date();
  timerDispaly.innerHTML = currentDate.toLocaleString();
}

// Update immediately on page load
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
