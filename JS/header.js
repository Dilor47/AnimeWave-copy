/*JS of pop ups messages on the header*/

const extra_2watch =  document.querySelector('.js_2gether');
const random_choice =  document.querySelector('.js_random');

const elements = [extra_2watch, random_choice];

elements.forEach((option) => {
  option.addEventListener('mouseenter', (e) => {
    document.querySelector(`.${option.dataset.class}`).classList.add('active');
  })
})

elements.forEach((option) => {
  option.addEventListener('mouseleave', (e) => {
    document.querySelector(`.${option.dataset.class}`).classList.remove('active');
  })
})


/* JS of pickUp Language */
const language_choice = document.querySelector('.choose');
const en = document.querySelector('.en');
const jp = document.querySelector('.jp');

language_choice.addEventListener('click', (event) => {
  en.classList.toggle('active');
  jp.classList.toggle('active');
})


/*JS of notification menu*/

const button_message_menu = document.querySelector('.message');
const menu_message = document.querySelector('.menu_message');


button_message_menu.addEventListener('focusout', (event) => {
  menu_message.classList.remove('active');
})


button_message_menu.addEventListener('click', (e) => {

  menu_message.classList.toggle('active');
  console.log('Click is activated');
})
