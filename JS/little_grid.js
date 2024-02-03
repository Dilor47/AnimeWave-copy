
const top_day = document.querySelector('.js_top_day');
const top_week = document.querySelector('.js_top_week');
const top_month = document.querySelector('.js_top_month');

const element_buttons = [top_day, top_week, top_month];

top_day.style.color = 'white';
top_day.style.backgroundColor = 'rgb(83, 27, 136)';

function handle_focus(event) {
  element_buttons.forEach(element_style => {
    element_style.style.color = '';
    element_style.style.backgroundColor = '';
  });
  event.style.color = 'white';
  event.style.backgroundColor = 'rgb(83, 27, 136)';
}

element_buttons.forEach(element => {
  element.addEventListener('focus', () => {
    handle_focus(element);
  })
})