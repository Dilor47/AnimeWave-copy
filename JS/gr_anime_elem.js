import {first_hover_loc, second_hover_loc, third_hover_loc} from './gr_recently_updated.js';
import generate_hover from './hover_anime_details.js';

function anime_elem(current_elem, isThereHover, where_stopped) {
  !isThereHover? console.log(where_stopped) : '';
  let ready_elem =  `
  <div class="anime_item">
      <a href ='#'>
        <div class="anim ${isThereHover? '': 'continue_part'}">
          <div class='img_container'>
            <img src="${current_elem.img_anime}" >
          </div>
          
          ${isThereHover? 
          `<div class="meta">
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

          </div>`: 
          `<div class='at_stopPoint_detail'>
              <div class='already_watched_period'></div>
              <div class='episode'>
                EP
                <span>${where_stopped.current_ep}</span>
              </div>
              <div class='duration_cont'>
                
              </div>
          </div>`

           }

        </div>
        
        ${isThereHover? generate_hover(current_elem, 
          'recently_updated ' + 
          first_hover_loc(current_elem) + 
          second_hover_loc() + 
          third_hover_loc(current_elem)): ''}

      </a>
      
      <a href='#'>
        <div class="info"> 
          ${current_elem.title}
        </div>
      </a>
      

    </div>
  `;
  return ready_elem;
}

export default anime_elem;

time_converter((67 * 60) + 5);

function time_converter(seconds) {
  let h_time = Math.floor(seconds / 3600);
  let m_time = Math.floor((seconds % 3600) / 60);
  let s_time = (seconds % 60)
  console.log(h_time, m_time, s_time);
  
  let ready_time = `${!h_time? '' : h_time}`;

} 

function hours_min(min) {
  let min_time;
  let hour_time;
}