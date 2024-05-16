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

document.addEventListener('DOMContentLoaded', function() {
  const flickity_viewport = document.querySelector('.carousel.second .flickity-viewport');
  //const pageDotsContainer = document.querySelector('.carousel.second .flickity-page-dots');
  if (flickity_viewport) {
      console.log(flickity_viewport);
      flickity_viewport.classList.add('second');
  }
});
/*
$(document).ready(() => {
  $('.carousel.second').flickity({
    cellAlign: 'left',
    contain: true,
    groupCells: 2
  })
})
*/


const flkty = new Flickity('.carousel.second', {
  cellAlign: 'left',
  contain: true,
  groupCells: 2,
  initialIndex: 3,
  freeScroll: false,
  /*prevNextButtons: false,*/
});

flkty.option('cellAlign', 'left');
