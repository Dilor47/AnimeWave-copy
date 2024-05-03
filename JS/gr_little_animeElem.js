import animeData from '../data/content_data.js';
import {isThereSubDub, getTotalEp} from '../JS/anime_tops.js';
import generate_hover from '../JS/hover_anime_details.js';

gr_element('new_release_adrs', new_release_filt);
gr_element('new_added_adrs', new_added_filt);
gr_element('just_complt_adrs', just_complt_filt);


function gr_element(adrs, find_data) {
  const wanted_data = find_data();
  console.log(wanted_data);
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
      </div>

     ${generate_hover(anime_elem, 'little')}

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

function new_release_filt() {
  return animeData;
}

function new_added_filt() {
  return animeData;
}

function just_complt_filt() {
  return animeData;
}
