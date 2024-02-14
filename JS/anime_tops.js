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
    if(i > 0) {
      return;
    }
    const index = i + 1;

    let html = `
    <div class="element" style='border-right: 2px solid ${pick_colorRank(index)};'>
      <div class="rank">
        <img src="images/ranking_anime_img/rank_images/rank_${index}.png">
      </div>
      <div class="anime_pict">
        <img src="${anime_elem.img_anime}">
      </div>

      <div class="main_hover_cont">
        <div class="anime_hover_cont">

          <div class="title_hover">
            <div class="hover_title">Title</div>
          </div>

          <div class="ep_available episode_info">

            <div class="ep_release">

              <div class="age_limit">PG 13</div>

              <p class="isHD">HD</p>

              <div class="mic_sub_total">
                
                <div class="ep_sub">
                  <i class="ep_sub_amount fa">12</i>
                </div>
    
                <div class="ep_mic">
                  <i class="ep_mic_amount fa">44</i>
                </div>
                
                <div class="ep_episodes">
                  <i class="ep_episodes_amount fa">76</i>
                </div>
              </div>
            </div>
          </div>

          <div class="short_hover_desc">
            <p>Jirou Yakuin had his sights set on being paired with Shiori Sakurazaka for the mandatory "Couple Practical" class. As a</p>
          </div>

          <div class="detailer_anime_info">

            <div class="other_name">
              <p class="littl_item">Other names: ...</p>
            </div>

            <div class="h_scores">
              <p class="littl_item">Scores: ...</p>
            </div>

            <div class="aired_date">
              <p class="littl_item">Data aired: ... to ...</p>
            </div>

            <div class="duration">
              <p>Duration: ...</p>
            </div>

            <div class="anime_status">
              <p>Status: ...</p>
            </div>

            <div class="genre">
              <p>Genre: ...</p>
            </div>

            <div class="action_cont">
              <button>Watch</button>
              <i class="fa-solid fa-people-arrows"></i>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
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
