import change_sourse from './anime_tops.js'

const day = document.querySelector('.js_top_day');
const week = document.querySelector('.js_top_week');
const month = document.querySelector('.js_top_month');

const make_buttons = [day, week, month];

make_buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    change_sourse(event.target.textContent);
  })
});

