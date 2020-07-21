const nav = document.getElementById('nav');
const navMenu = document.getElementById('navMenu');
const navButton = document.getElementById('navButton');
const navOverlay = document.querySelector('.hidden-overlay');


navButton.addEventListener('click', function () {
  openNavigation();
  openButton();
});


let menuOpen = false;
function openNavigation() {
  if (!menuOpen) {
    navMenu.classList.add('nav__menu--open');
    navOverlay.classList.add('nav__overlay','fade-in');
    navMenu.classList.add('fade-in');
    menuOpen = true;

  } else {
    navMenu.classList.add('fade-out');
    navOverlay.classList.add('fade-out');

    navMenu.classList.remove('fade-in');
    navOverlay.classList.remove('fade-in');

    setTimeout(() => {
      navMenu.classList.remove('nav__menu--open');
      navOverlay.classList.remove('fade-out');
      navMenu.classList.remove('fade-out');
    }, 1000);
    menuOpen = false;
  }
}

let buttonOpen = false;
function openButton() {
  if (!buttonOpen) {
    navButton.classList.add('nav__button--open');
    buttonOpen = true;
  } else {
    navButton.classList.remove('nav__button--open');
    buttonOpen = false;
  }
}