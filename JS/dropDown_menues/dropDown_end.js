const button_endMenu = document.getElementById('dropDown_end');
const container_show = document.querySelector('.container_profile');
const button_cont = document.querySelector('.tooltip_options');

button_endMenu.addEventListener('click', () => {
  container_show.classList.toggle('show');
})

document.addEventListener('click', (event) => {
  if(
    container_show.classList.contains('show') && 
    !event.target.closest('.container_profile')&&
    !event.target.closest('.tooltip_options')
  ) {
    container_show.classList.remove('show');
  };
})
