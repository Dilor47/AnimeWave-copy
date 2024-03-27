const search_cont = document.getElementById('search_cont');
const search_box = document.getElementById('search_box');

const active_part = document.querySelector('.active_search');
const content = document.querySelector('.bottom_search_cont');
const trigger = document.getElementById('trigger');
const search_below = document.getElementById('support_search');

trigger.addEventListener('click', () => {
  const event = new Event('focusin', {
    bubbles: true
  });

  if(!content.classList.contains('on')) {
    active_part.classList.add('on');
    content.classList.add('on');
    search_below.dispatchEvent(event);
    /*search_box.focus();*/
    console.log('Made');
    console.log(document.activeElement);
  } else {
    active_part.classList.remove('on');
    content.classList.remove('on');
  }

})

search_below.addEventListener('focusin', () => {
  console.log('FOCUSED!');
})

search_below.addEventListener('focusout', () => {
  console.log('UN-FOCUSED!');
  active_part.classList.remove('on');
  content.classList.remove('on');
})

search_box.addEventListener('focusin', (event) => {
  // When focusin event occurs on search_cont, focus the search_box
  if (!active_part.classList.contains('on')) {
    active_part.classList.add('on');
    content.classList.add('on');
  }
});

search_cont.addEventListener('blur', (event) => {
  if(active_part.classList.contains('on')) {
    active_part.classList.remove('on');
    content.classList.remove('on');
  }
});
/*
const focusInEvent = new Event('focusin', {
  bubbles: true, // Make sure it bubbles up through the DOM
  cancelable: true // Make sure it's cancelable
});

function toggleSearchContainer() {
  console.log('doing');
  let searchContainerWasActive;
  if (window.innerWidth >= 1200) {
    // Remember if search container was active before hiding it
    searchContainerWasActive = active_part.classList.contains('on');
    // Hide search container for smaller screens
  } else {
    // Show search container for larger screens
    if (searchContainerWasActive) {
      active_part.classList.add('on');
      /*search_box.focus();*/
      /*
      search_box.dispatchEvent(focusInEvent);
      console.log('AddedD');
    }
  }
}

// Initial call to set initial state
toggleSearchContainer();

// Event listener to handle screen size changes
window.addEventListener('resize', toggleSearchContainer);


*/


/* Main search */
/*
const search_focus = document.getElementById('search_cont');
const search_box = document.getElementById('search_box');
const active_part = document.querySelector('.active_search');
const content = document.querySelector('.bottom_search_cont')
const trigger = document.getElementById('trigger');

const array_events = [search_focus, search_box];
// Function to handle focus
function handleFocus() {
  search_box.focus();
  if (!active_part.classList.contains('on')) {
      console.log('It was focused!');
      active_part.classList.add('on');
      content.classList.add('on');
  }
}

// Add event listener for focusin
array_events.forEach((elem) => {
  elem.addEventListener('focusin', handleFocus);
});

// Add event listener for focusout
document.addEventListener('focusout', (event) => {
  const focusedElement = event.relatedTarget || document.activeElement;
  if (!focusedElement || !focusedElement.closest('.array_events')) {
      // Perform actions to remove focus styling
      active_part.classList.remove('on');
      content.classList.remove('on');
  }
});

// Add event listener for window resize
window.addEventListener('resize', () => {
  console.log(document.activeElement);
  // Check if array_events element is focused
  const isFocused = array_events.some(elem => elem === document.activeElement);
  if (isFocused) {
      handleFocus();
  }

  let searchContainerWasActive = false;

  if (window.innerWidth >= 1200) {
    // Remember if search container was active before hiding it
    searchContainerWasActive = active_part.classList.contains('on');
    // Hide search container for smaller screens
  } else {
    // Show search container for larger screens
    if (searchContainerWasActive) {
      active_part.classList.add('on');
      search_focus.focus();
      search_box.focus();
      console.log('AddedD');
    }
  }
});



/*
array_events.forEach((elem) => {
  elem.addEventListener('focus', (e) => {
    search_box.focus();
    if(!active_part.classList.contains('on')) {
      console.log('It was focused!');
      active_part.classList.add('on');
      content.classList.add('on');
    }
  });

  elem.addEventListener('focusout', (e) => {
    if(active_part.classList.contains('on')) {
      console.log('It was UNfocused!');
      active_part.classList.remove('on');
      content.classList.remove('on');
    }
    
  });
});



console.log(active_part.classList.contains('on'));

const searchContainer = document.querySelector('.search_container');
let searchContainerWasActive = false;

// Function to toggle search container based on screen width
function toggleSearchContainer() {
  console.log('doing');
  if (window.innerWidth >= 1200) {
    // Remember if search container was active before hiding it
    searchContainerWasActive = active_part.classList.contains('on');
    // Hide search container for smaller screens
  } else {
    // Show search container for larger screens
    if (searchContainerWasActive) {
      active_part.classList.add('on');
      search_focus.focus();
      search_box.focus();
      console.log('AddedD');
    }
  }
}

// Initial call to set initial state
toggleSearchContainer();

// Event listener to handle screen size changes
window.addEventListener('resize', toggleSearchContainer);

/* Search when screen get small 


































// active_part = to find out was active search closed or not


trigger.addEventListener('click', () => {
  if(active_part.classList.contains('on')) {
    active_part.classList.remove('on');
  } else {
    console.log('Npope');
    
  }
})

*/