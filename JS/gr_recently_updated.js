import content_data from '../data/content_data.js';
import generate_elem from './gr_anime_elem.js';

const address = document.getElementById('ani_elems');

let first_count = 0;
let second_count = 0;
let third_count = 0;

recently_updated();

function recently_updated() {
  let generated_hovers = '';
  let limit = 0;

  content_data.forEach((current_elem) => {
    if(limit >= 12) {
      return;
    }
    let html = generate_elem(current_elem, true);
    generated_hovers += html;
    limit++;
    first_count++;
    second_count++;
    third_count++;
  })
  address.innerHTML = generated_hovers
}


export function first_hover_loc() {
  if (first_count === 3) {
    return " first_right";
  } else if(first_count === 4) {
    first_count = -1;
    return " first_right";
  } else {
    return '';
  }
}

export function second_hover_loc() {
  if(second_count === 2) {
    return " second_right";
  } else if(second_count === 3) {
    second_count = -1;
    return " second_right";
  } else {
    return '';
  }
}

export function third_hover_loc() {
  if(third_count === 1) {
    return ' middle_hover';
  } 

  if(third_count === 2) { 
    third_count = -1;
    return " third_right";
  } else {
    return '';
  }
}
