
let intervalId;

const dates = dayjs();

const current_dateTime = document.querySelector('.current_dateTime');

intervalId = setInterval(() => {
  const dates = dayjs();
  current_dateTime.innerText = dates.format('D/M/YYYY h:mm:ss A');
}, 1000)


function cleaning_interval() {
  clearInterval(intervalId);
}