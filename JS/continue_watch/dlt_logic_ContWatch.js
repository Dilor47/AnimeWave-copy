import {get_stopPoint_data, updater_data} from '../../data/current_watching_anime.js';

const addrs_closeBtn = document.querySelector('.popUp_message');
let timeoutID;

export function set_eventClick() {
  const triggers = document.querySelectorAll('.dlt_sign_cont');
  
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      clearTimeout(timeoutID);
      addrs_closeBtn.classList.add('active');
      hideShow_message();
      const dlt_Elem_id = parseInt(e.currentTarget.getAttribute('id_elem'));
      const updated_data = get_stopPoint_data().filter((elem) => elem.id !== dlt_Elem_id);
      updater_data(updated_data);
    })
  })
}

function hideShow_message() {
  timeoutID = setTimeout(() => {
    addrs_closeBtn.classList.remove('active');
  }, 4000);
}


const close_message = document.querySelector('.close_btn');


close_message.addEventListener('click', () => {
  clearTimeout(timeoutID);
  addrs_closeBtn.classList.remove('active');
})