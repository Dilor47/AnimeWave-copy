import animeData from '../data/content_data.js';
import {isThereSubDub, getTotalEp} from '../JS/anime_tops.js';
import generate_hover from '../JS/hover_anime_details.js';

gr_element('new_release_adrs', filtering_data('Releasing'));
gr_element('new_added_adrs', filtering_data('Ongoing'));
gr_element('just_complt_adrs', filtering_data('Completed'));


function gr_element(adrs, wanted_data) {
  let html = '';
  let count = 0;
  wanted_data.forEach((anime_elem) => {
    if(count >= 5) {
      return;
    }
    html += `
    <div class="element little">

      <div class="anime_pict little">
        <img src="${anime_elem.img_anime}">
        ${generate_hover(anime_elem, 'little')}
      </div>

      

      <div class="deep_desc">
        <div class="title little">
          ${anime_elem.title}
        </div>

        <div class="ep_release">

          <div class="mic_sub_total little">
            ${isThereSubDub(anime_elem.sub, 'sub')}
            ${isThereSubDub(anime_elem.dub, 'mic')}
            ${getTotalEp(anime_elem.total_episodes)}
          </div>

          <div class="watch_to little">
            <span>
              <i class="fa-solid fa-circle dot"></i>
              <i class='type_anime little'>${anime_elem.anime_type}</i>  
              <i class="fa-solid fa-circle dot"></i>
              <span class='release_data' >${anime_elem.data_aired}</span>
            </span>
          </div>

        </div>

      </div>
      
    </div>`;
    count++;
  });
  document.querySelector(`.${adrs}`).innerHTML = html;

}

export function filtering_data(data_class) {
  const data_to_filter = animeData.filter((elem) => elem.status === data_class);

  const filtered_data = data_to_filter.sort((a, b) => {
    const dateA = new Date(a.data_completed);
    const dateB = new Date(b.data_completed);

    if (dateA > dateB) {
      return -1; 
    } else if (dateA < dateB) {
      return 1; 
    } else {
      return 0; 
    }
    
  });
  return filtered_data
}