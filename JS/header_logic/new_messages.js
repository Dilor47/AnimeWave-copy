const menu_btn = document.querySelector('.message');
const menu_message = document.querySelector('.menu_message');


menu_btn.addEventListener('click', (e) => {
  menu_message.classList.toggle('active');
})

document.addEventListener('click', (event) => {
  if(
    menu_message.classList.contains('active') &&
    !event.target.closest('.menu_message') &&
    !event.target.closest('.message') &&
    !event.target.closest('.message_header')
  ) {
    menu_message.classList.remove('active');
  }
})
