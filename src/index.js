import './index.scss';

let tracker = true;
const button = document.querySelector('.header__button');
const img = document.querySelector('#img');
const navigation = document.querySelector('.header__navigation');

button.addEventListener('click', () => {
  if (tracker) {
    img.src = './img/icon-close.svg';
    navigation.style.visibility = 'visible';
    navigation.style.opacity = '1';
    tracker = false;
  } else {
    img.src = './img/icon-hamburger.svg';
    navigation.style.visibility = 'hidden';
    navigation.style.opacity = '0';
    tracker = true;
  }
});
