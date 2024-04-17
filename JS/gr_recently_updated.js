import content_data from '../data/content_data.js';
import generate_hover from './hover_anime_details.js';

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
    let html = `
    <div class="anime_item">
      <div class="anim">
        <div class='img_container'>
          <img src="${current_elem.img_anime}" >
        </div>
        

        <div class="meta">
          <div class="meta_elems">
            ${current_elem.sub?
              `<div class="ep_subhov">
                <i class="ep_subhov_amount fa faElem">${current_elem.sub}</i>
              </div>` : ''}
            ${current_elem.dub? 
              ` <div class="ep_michov">
                <i class="ep_michov_amount fa faElem">${current_elem.dub}</i>
              </div>`: ''}
           
            ${current_elem.total_episodes? 
              `<div class="ep_episodeshov">
                <i class="ep_episodeshov_amount fa faElem">${current_elem.total_episodes}</i>
              </div>`: ''
            }
          </div>

          <div class="watch_to_Elm">
            <i class='type_anime_Elm'>${current_elem.anime_type}</i>  
          </div>

        </div>
      </div>

      ${generate_hover(current_elem, 
        'recently_updated ' + 
        first_hover_loc(current_elem) + 
        second_hover_loc() + 
        third_hover_loc(current_elem) )}
      <div class="info"> 

        ${current_elem.title}
      </div>

    </div>
    `;
    generated_hovers += html;
    limit++;
    first_count++;
    second_count++;
    third_count++;
  })
  address.innerHTML = generated_hovers
}


function first_hover_loc() {
  if (first_count === 3) {
    return " first_right";
  } else if(first_count === 4) {
    first_count = -1;
    return " first_right";
  } else {
    return '';
  }
}

function second_hover_loc() {
  if(second_count === 2) {
    return " second_right";
  } else if(second_count === 3) {
    second_count = -1;
    return " second_right";
  } else {
    return '';
  }
}

function third_hover_loc() {
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
