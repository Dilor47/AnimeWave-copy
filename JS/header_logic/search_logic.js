//search boxea & search_cont pop-ups

//Main
const search_box = document.getElementById('search_box');
const active_part = document.querySelector('.active_search');

//Small
const search_below = document.getElementById('support_search');
const content = document.querySelector('.bottom_search_cont');

//triggers
const trigger_button = document.getElementById('trigger');
const lens_trigger = document.getElementById('main_seach_sign');
const search_lens = document.getElementById('search_lens');


function clear_text() {
  search_below.value = '';
  search_box.value = '';
}

//First search_part

lens_trigger.addEventListener('click', () => {
  active_part.classList.add('on');
  toggleSearchContainer();
  search_box.focus();
});

search_box.addEventListener('click', (event) => {
  if (!active_part.classList.contains('on')) {
    active_part.classList.add('on');
    toggleSearchContainer();
    search_box.focus();
  }
});

document.addEventListener('click', function(event) {
  if(active_part.classList.contains('on') && !event.target.closest('.const_search')) {
    console.log('dopeeee');
    active_part.classList.remove('on');
    clear_text();
    toggleSearchContainer();
  }
});

//End of the first search_part

//Second search_part

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
  }
  toggleSearchContainer();
});


document.addEventListener('click', (event) => {
  if(
    content.classList.contains('on') &&
    !event.target.closest('#trigger') &&
    !event.target.closest('#below_search_cont')
  ) {
    console.log('YEAP!');
    content.classList.remove('on');
    clear_text();
    toggleSearchContainer();
  }
})

//The end of the second search_part

//The logic of search resizing between > 1200  and < 1200 innerWidth!

let searchContainerWasActiveIn;
let searchContainerWasActiveOut;

let prevFocusIn;
let prevFocusOut;

let prevInputBefIn;
let prevInputBefOut;


export function toggleSearchContainer() {

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
    toggleSearchContainer();
    console.log('Once done', searchContainerWasActiveOut);
  }

  if(window.innerWidth < 1200 && searchContainerWasActiveIn) {
    content.classList.add('on');
    active_part.classList.remove('on');
    prevFocusIn? search_below.focus() : '';
    search_below.value = prevInputBefIn;
    searchContainerWasActiveIn = false;
    toggleSearchContainer();
    console.log('Second done', searchContainerWasActiveIn);
  }
}

// Initial call to set initial state
toggleSearchContainer();


// Event listener to handle screen size changes
window.addEventListener('resize', toggleSearchContainer);
