import {toggleSearchContainer} from './search_logic.js';

const main_search = document.getElementById('search_box');
const support_search = document.getElementById('support_search');


function syncInputValues(value) {
  main_search.value = value;
  support_search.value = value;
  toggleSearchContainer();
}

main_search.addEventListener('input', (event) => {
  syncInputValues(event.target.value);
});
support_search.addEventListener('input', (event) => {
  syncInputValues(event.target.value);
});

//Cleaning

const clean_button = document.getElementById('cleaning');

clean_button.addEventListener('click', () => {
  syncInputValues('');
  main_search.focus();
});



