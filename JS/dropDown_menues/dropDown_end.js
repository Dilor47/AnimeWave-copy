const button_endMenu = document.getElementById('dropDown_end');
const container_show = document.querySelector('.container_profile');

button_endMenu.addEventListener('click', () => {
  container_show.classList.toggle('show');

})

button_endMenu.addEventListener('focusout', () => {
  container_show.classList.remove('show');

})