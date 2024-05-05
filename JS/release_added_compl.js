const tab_elems = document.querySelectorAll('.tab');
const three_selections = document.querySelectorAll('.for_flex');

const new_release = document.querySelector('.new_release');
const new_added = document.querySelector('.new_added');
const just_completed = document.querySelector('.just_completed');

tab_elems.forEach((tab_elem) => {
  tab_elem.addEventListener('click', (e) => {
    cleaning_active(tab_elems);
    cleaning_active(three_selections);
    e.currentTarget.classList.add('active');
    let name_data = e.target.getAttribute('data-name');
    selected_one(name_data);
  })
}); 

function cleaning_active(where_clean) {
  where_clean.forEach((elm) => {
    elm.classList.remove('active');
  });
}

function selected_one(selected) {
  selected === 'new_release'? new_release.classList.add('active') : '';
  selected === 'new_added'? new_added.classList.add('active') : '';
  selected === 'just_completed'? just_completed.classList.add('active') : '';
}