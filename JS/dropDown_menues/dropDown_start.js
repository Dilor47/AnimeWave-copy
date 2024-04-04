const dropDown_btn = document.querySelector('.js_dropDown');//
const dropDown_menu = document.querySelector('.dropDown_content');
const button = document.querySelector('#js_change_btn');

dropDown_btn.addEventListener('click', () => {
  button.classList.toggle('fa-xmark');
  button.classList.toggle('fa-bars-staggered');

  dropDown_menu.classList.toggle('show');
})

document.addEventListener('click', function(event) {
  if (dropDown_menu.classList.contains('show') &&
   event.target !== dropDown_btn && 
   !event.target.closest('.dropDown_content') &&
   !event.target.closest('#js_change_btn')
   ) {
    button.classList.remove('fa-xmark');
    button.classList.add('fa-bars-staggered');
  
    dropDown_menu.classList.remove('show');
  }
});
