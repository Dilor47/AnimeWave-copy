const search_cont = document.getElementById('search_cont');

const search_box = document.getElementById('search_box');
const search_below = document.getElementById('support_search');

const active_part = document.querySelector('.active_search');
const content = document.querySelector('.bottom_search_cont');
const trigger_button = document.getElementById('trigger');
const lens_trigger = document.getElementById('main_seach_sign');
const search_lens = document.getElementById('search_lens');

const search_below_cont = document.getElementById('below_search_cont');

lens_trigger.addEventListener('click', () => {
  search_box.focus();
});

search_lens.addEventListener('click', () => {
  search_below.focus();
});


trigger_button.addEventListener('click', () => {
  if(!content.classList.contains('on')) {
    content.classList.add('on');
    search_below.focus();
  } else {
    content.classList.remove('on');
    clear_text();
    toggleSearchContainer();
  }
});


search_below_cont.addEventListener('focusin', () => {
  toggleSearchContainer();
});

search_below.addEventListener('focusin', () => {
  toggleSearchContainer();
});


search_below.addEventListener('blur', (e) => {
  if(e.relatedTarget !== search_below_cont && e.relatedTarget !== trigger_button) {
    content.classList.remove('on');
    clear_text();
    toggleSearchContainer();
  }

});


search_below_cont.addEventListener('blur', (e) => {
  if(e.relatedTarget !== search_below) {
    content.classList.remove('on');
    clear_text();
    toggleSearchContainer();
  }
})


function clear_text() {
  search_below.value = '';
  search_box.value = '';
}


search_box.addEventListener('focusin', (event) => {
  // When focusin event occurs on search_cont, focus the search_box
  if (!active_part.classList.contains('on')) {
    active_part.classList.add('on');
    toggleSearchContainer();
    console.log('FOCUSED search_box');
  }
});

search_cont.addEventListener('focusin', () => {
  console.log('FOCUSED search_cont');
  toggleSearchContainer();
})

search_cont.addEventListener('focusout', (event) => {
  if(event.relatedTarget !== search_cont && active_part.classList.contains('on')) 
    active_part.classList.remove('on');
    clear_text();
    //toggleSearchContainer();
    console.log('toggleSearchContainer() in use with ONFOCUSED: search_cont');
  });

search_box.addEventListener('blur', (event) => {
  if(event.relatedTarget !== search_cont  && active_part.classList.contains('on')) {
    active_part.classList.remove('on');
    clear_text();
    //toggleSearchContainer();
    console.log('toggleSearchContainer() in use with ONFOCUSED: search_box');
  }
});


//The logic of search resizing between > 1200  and < 1200 innerWidth!

let searchContainerWasActiveIn;
let searchContainerWasActiveOut;

let prevFocusIn;
let prevFocusOut;

let prevInputBefIn;
let prevInputBefOut;


export function toggleSearchContainer() {
  //console.log('Doing');


  window.innerWidth < 1200? searchContainerWasActiveOut = content.classList.contains('on') : '';
  window.innerWidth < 1200? prevFocusOut = (document.activeElement === search_below) : '';
  window.innerWidth < 1200? prevInputBefOut = search_below.value : '';

  window.innerWidth > 1200? searchContainerWasActiveIn = active_part.classList.contains('on'): '';
  window.innerWidth > 1200? prevFocusIn = (document.activeElement === search_box): '';
  window.innerWidth > 1200? prevInputBefIn = search_box.value : '';

  if(window.innerWidth > 1200 && searchContainerWasActiveOut) {
    active_part.classList.add('on');
    content.classList.remove('on');
    prevFocusOut? search_box.focus() : '';
    search_box.value = prevInputBefOut;
    searchContainerWasActiveOut = false;
    console.log('Once done', searchContainerWasActiveOut);
  }

  if(window.innerWidth < 1200 && searchContainerWasActiveIn) {
    content.classList.add('on');
    active_part.classList.remove('on');
    prevFocusIn? search_below.focus() : '';
    search_below.value = prevInputBefIn;
    searchContainerWasActiveIn = false;
    console.log('Second done', searchContainerWasActiveIn);
  }
}

// Initial call to set initial state
toggleSearchContainer();


// Event listener to handle screen size changes
window.addEventListener('resize', toggleSearchContainer);