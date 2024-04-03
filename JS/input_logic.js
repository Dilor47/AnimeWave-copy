import {toggleSearchContainer} from './dropDown_menues/search_logic.js';

const main_search = document.getElementById('search_box');
const support_search = document.getElementById('support_search');


function syncInputValues(value) {
  main_search.value = value;
  support_search.value = value;
  toggleSearchContainer();
  console.log('Soos');
}

main_search.addEventListener('input', (event) => {
  syncInputValues(event.target.value);
});
support_search.addEventListener('input', (event) => {
  syncInputValues(event.target.value);
});

