
const search_focus = document.getElementById('search_cont');
const search_box = document.getElementById('search_box');
const active_part = document.querySelector('.active_search');

[search_focus, search_box].forEach((elem) => {
  console.log('done!');
  elem.addEventListener('focus', (e) => {
    search_box.focus();
    if(!active_part.classList.contains('on')) {
      active_part.classList.add('on');
    }
  });

  elem.addEventListener('focusout', (e) => {
    /*search_box.onfocus();*/
    if(active_part.classList.contains('on')) {
      active_part.classList.remove('on');
    }
  });

})

