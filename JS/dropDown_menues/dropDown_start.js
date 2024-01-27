const dropDown_btn = document.querySelector('.js_dropDown');//
const dropDown_menu = document.querySelector('.dropDown_content');
const button = document.querySelector('#js_change_btn');

dropDown_btn.addEventListener('click', () => {

  button.classList.toggle('fa-xmark');
  button.classList.toggle('fa-bars-staggered');

  dropDown_menu.classList.toggle('show');
})



dropDown_btn.addEventListener('focusout', (event) => {
  button.classList.remove('fa-xmark');
  button.classList.add('fa-bars-staggered');

  dropDown_menu.classList.remove('show');
})