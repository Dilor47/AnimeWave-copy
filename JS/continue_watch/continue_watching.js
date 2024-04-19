import content_data from '../../data/content_data.js';
import generate_elem from '../gr_anime_elem.js';

const address = document.querySelector('.ready_continueWatchs');

continue_watching_anime();

function continue_watching_anime() {
  let ready_elems = '';
  let count = 0;

  content_data.forEach((current_one) => {
    if(count < 6) {
      let html_part = generate_elem(current_one, false);
      ready_elems += html_part;
      count++;
    }
  });
  address.innerHTML = ready_elems;
}
