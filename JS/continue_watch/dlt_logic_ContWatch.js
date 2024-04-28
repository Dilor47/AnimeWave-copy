import {get_stopPoint_data, updater_data} from '../../data/current_watching_anime.js';

export function set_eventClick() {
  const triggers = document.querySelectorAll('.dlt_sign_cont');
  
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      const dlt_Elem_id = parseInt(e.currentTarget.getAttribute('id_elem'));
      const updated_data = get_stopPoint_data().filter((elem) => elem.id !== dlt_Elem_id);
      updater_data(updated_data);
    })
  })
}
