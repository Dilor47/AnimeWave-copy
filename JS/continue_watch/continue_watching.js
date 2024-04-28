import content_data from '../../data/content_data.js';
import generate_elem from '../gr_anime_elem.js';
import {get_stopPoint_data} from '../../data/current_watching_anime.js';
import {set_eventClick} from '../continue_watch/dlt_logic_ContWatch.js';

const address = document.querySelector('.ready_continueWatchs');

continue_watching_anime();


export function continue_watching_anime() {
  let ready_elems = '';
  let count = 0;

  get_stopPoint_data().forEach((current_one) => {
    if(count < 6) {
      let html_part = generate_elem(found_idData(current_one.id), false, current_one);
      ready_elems += html_part;
      count++;
    }
  });
  address.innerHTML = ready_elems;
  set_eventClick();
}



function found_idData(id) {
  let data;
  content_data.forEach((elm) => {
    if(elm.id === id && !data) {
      data = elm;
    }
  });
  return data;
}
