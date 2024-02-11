import top_anime_data from '../data/info_top_rank.js';

let picked_data = true;

export default function change_sourse(prop) {
  if(prop == 'Day') {
    picked_data = true;
  } else {
    picked_data = false;
  }
  render_list();
}

const render_container = document.querySelector('.anime_tops');

render_list();

function render_list() {
  let html_animeTops = '';

  const remnder_from = picked_data === true? top_anime_data : schuffle_data(top_anime_data);

  remnder_from.forEach((anime_elem, i) => {
    const index = i + 1;

    let html = `
    <div class="element" style='border-right: 2px solid ${pick_colorRank(index)};'>
      <div class="rank">
        <img src="images/ranking_anime_img/rank_images/rank_${index}.png">
      </div>
      <div class="anime_pict">
        <img src="${anime_elem.img_anime}">
      </div>

      <div class="deep_desc">
        <div class="title">
          ${anime_elem.title}
        </div>

        <div class="ep_release">

          <div class="mic_sub_total">
            
            ${isThereSubDub(anime_elem.sub, 'sub')}

            ${isThereSubDub(anime_elem.dub, 'mic')}
            
            <div class="ep_episodes">
              <i class="ep_episodes_amount fa">${anime_elem.total_episodes}</i>
            </div>
          </div>
          <div class="watch_to">
            <i class="fa-solid fa-minus fa-xs"></i>
            <i class='type_anime'>${anime_elem.anime_type}</i>  
          </div>
        </div>
      </div>
    </div>`;
    html_animeTops += html;
  });

  render_container.innerHTML = html_animeTops;
}



function isThereSubDub(isAvailable, subDub) {
  return isAvailable? (
   `<div class="ep_${subDub}">
      <i class="ep_${subDub}_amount fa">${isAvailable}</i>
    </div>`
  ) : '';
};


function pick_colorRank(position) {
  if(position == 1) {
    return 'rgb(183, 0, 255)';
  } else if (position == 2) {
    return 'rgb(175, 38, 38)';
  } else if(position == 3) {
    return 'rgb(194, 165, 0)';
  } else {
    return null;
  }
}


function schuffle_data(ready_array) {
  const data = ready_array.map(element => element);

  for(let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data
}
