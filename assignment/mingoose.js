const leftDate = document.querySelector("#left-date");

function getDiffDate() {
  const masTime = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const todayTime = new Date();

  const diffTime = masTime - todayTime;

  const diffDay = String(Math.floor(diffTime / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const diffHour = String(
    Math.floor((diffTime / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const diffMin = String(Math.floor((diffTime / (1000 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const diffSec = String(Math.floor((diffTime / 1000) % 60)).padStart(2, "0");

  leftDate.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

getDiffDate();
setInterval(getDiffDate, 1000);
