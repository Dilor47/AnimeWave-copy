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

  const render_from = picked_data === true? top_anime_data : schuffle_data(top_anime_data);

  render_from.forEach((anime_elem, i) => {
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
            <div class="hover_title">${anime_elem.title}</div>
          </div>

          <div class="ep_available episode_info">

            <div class="ep_release">

              <div class="age_limit">PG 13</div>

              ${anime_elem.hd? `<p class="isHD">HD</p>`: ''}


              <div class="mic_sub_total">
                
                ${isThereSubDub(anime_elem.sub, 'sub', 'hov')} 
    
                ${isThereSubDub(anime_elem.dub, 'mic', 'hov')}
                
                ${getTotalEp(anime_elem.total_episodes, true)}
                
              </div>
            </div>
          </div>
          
          <div class="short_hover_desc">
            <p>${anime_elem.short_desc}</p>
          </div>

          <div class="detailer_anime_info">

            <div class="other_name make_row">
              <p class='comp_info'> <span class="component_name">Other names: </span> 
              ${unpack_array(anime_elem.other_names)}</p>
            </div>

            <div class="h_scores make_row">
              <p class='comp_info'> <span class="component_name">Scores: </span> 
              ${anime_elem.score} <span class="component_name">/${anime_elem.reviewed} reviews </span>  </p>
            </div>  

            <div class="aired_date make_row">
              <p class='comp_info'> <span class="component_name">Data aired: </span> 
              ${anime_elem.data_aired} to ${anime_elem.data_completed}</p>
            </div>

            <div class="duration make_row">
              <p class='comp_info'> <span class="component_name">Duration: </span> 
              ${anime_elem.duration} min</p>
            </div>

            <div class="anime_status make_row">
              <p class='comp_info'> <span class="component_name">Status: </span> 
              ${anime_elem.status }</p>
            </div>

            <div class="genre make_row">
              <ul class="genre_style comp_info"><span class="component_name">Genre: </span> 
              ${create_genre(anime_elem.genre)}</ul>
            </div>

            <div class="action_cont">
              <button href='${anime_elem.link_to_anime}' >Watch</button>
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
            
            ${getTotalEp(anime_elem.total_episodes)}

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


function isThereSubDub(isAvailable, subDub, hover_ind='') {
  return isAvailable? (
   `<div class="ep_${subDub + hover_ind}">
      <i class="ep_${subDub + hover_ind}_amount fa ${hover_ind? 'fahov' : ''}">${isAvailable}</i>
    </div>`
  ) : '';
};

function getTotalEp(amount, type=false) {
  return `
    <div class="${type? 'ep_episodeshov': 'ep_episodes'}">
      <i class="ep_episodes_amount fa ${type? 'fahov': ''}">${amount}</i>
    </div>
    `
}

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

function create_genre(genres) {
  let genres_choice = '';
  genres.forEach((genre_elem) => {
    genres_choice += `<li href='#'>${genre_elem}, </li>`;
  });
  return genres_choice;

}

function unpack_array(array) {
  const ready_one = array.join(', ');
  return ready_one;
}

