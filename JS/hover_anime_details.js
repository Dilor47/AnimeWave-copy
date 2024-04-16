import {isThereSubDub, getTotalEp} from './anime_tops.js';

function generate_hover(current_elem, spec_catg) {
  const ready_hover = `
  <div class="main_hover_cont ${spec_catg}">
        <div class="anime_hover_cont">

          <div class="title_hover">
            <div class="hover_title">${current_elem.title}</div>
          </div>

          <div class="ep_available episode_info">

            <div class="ep_release">

              <div class="age_limit">PG 13</div>

              ${current_elem.hd? `<p class="isHD">HD</p>`: ''}


              <div class="mic_sub_total">
                
                ${isThereSubDub(current_elem.sub, 'sub', 'hov')} 
    
                ${isThereSubDub(current_elem.dub, 'mic', 'hov')}
                
                ${getTotalEp(current_elem.total_episodes, true)}
                
              </div>
            </div>
          </div>
          
          <div class="short_hover_desc">
            <p>${current_elem.short_desc}</p>
          </div>

          <div class="detailer_anime_info">

            <div class="other_name make_row">
              <p class='comp_info'> <span class="component_name">Other names: </span> 
              ${unpack_array(current_elem.other_names)}</p>
            </div>

            <div class="h_scores make_row">
              <p class='comp_info'> <span class="component_name">Scores: </span> 
              ${current_elem.score} <span class="component_name">/${current_elem.reviewed} reviews </span>  </p>
            </div>  

            <div class="aired_date make_row">
              <p class='comp_info'> <span class="component_name">Data aired: </span> 
              ${current_elem.data_aired} to ${current_elem.data_completed}</p>
            </div>

            <div class="duration make_row">
              <p class='comp_info'> <span class="component_name">Duration: </span> 
              ${current_elem.duration} min</p>
            </div>

            <div class="anime_status make_row">
              <p class='comp_info'> <span class="component_name">Status: </span> 
              ${current_elem.status }</p>
            </div>

            <div class="genre make_row">
              <ul class="genre_style comp_info"><span class="component_name">Genre: </span> 
              ${create_genre(current_elem.genre)}</ul>
            </div>

            <div class="action_cont">

              <div class='cont_one'>
                <div class='button_class' href=''>
                  <p class='button_class_text'> 
                   <i class="fa-solid fa-play"></i> Watch
                  <p/>
                 </div>
              </div>
              
              <div class='cont'>
                <i class="fa-solid fa-people-arrows fa-xl"></i>
              </div>

              <div class='cont'>
                <i class="fa-solid fa-plus fa-xl"></i>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    `;
    return ready_hover ; 
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



export default generate_hover;