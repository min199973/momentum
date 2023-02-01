const left_date = document.querySelector("#left-date");

function getClock() {
  const masDate = new Date("2023-12-25");
  const today = new Date();
  const year = today.getFullYear();
  console.log(year);
  const diff = masDate - today;
}
