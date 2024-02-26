import change_sourse from './anime_tops.js'

const choices = document.querySelectorAll('.spec_sourse');

function clear_set({target}) {
  choices.forEach((elem) => {elem.classList.remove('focusedIs')});
  target.classList.add('focusedIs');}

choices.forEach((chosen) => {
  chosen.addEventListener('click', (e) => {
    clear_set(e);
  })
})