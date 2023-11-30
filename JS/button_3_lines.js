const dropDown_btn = document.querySelector('.js_dropDown');
const dropDown_menu = document.querySelector('.dropDown_content');

dropDown_btn.addEventListener('click', () => {
  
  dropDown_menu.classList.toggle('show');
})