const extra_2watch =  document.querySelector('.js_2gether');
const random_choice =  document.querySelector('.js_random');

const elements = [extra_2watch, random_choice];

elements.forEach((option) => {
  option.addEventListener('mouseenter', (e) => {
    document.querySelector(`.${option.dataset.class}`).classList.add('active');
  })
})

elements.forEach((option) => {
  option.addEventListener('mouseleave', (e) => {
    document.querySelector(`.${option.dataset.class}`).classList.remove('active');
  })
})