const nav = document.getElementById('nav');
const navMenu = document.getElementById('navMenu');
const navButton = document.getElementById('navButton');
const navOverlay = document.querySelector('.hidden-overlay');
const body = document.querySelector('.body');

navButton.addEventListener('click', function (e) {
  openNavigation();
  openButton();
  e.stopPropagation();
});

body.addEventListener('click', function() {
  if(navOverlay.classList.contains('nav__overlay','fade-out')) {
    openNavigation();
    openButton();
  }
});

let menuOpen = false;
function openNavigation() {
  if (!menuOpen) {
    navMenu.classList.add('nav__menu--open','fade-in');
    navOverlay.classList.add('nav__overlay','fade-in');
    menuOpen = true;

  } else {
    navMenu.classList.remove('nav__menu--open','fade-in');
    navOverlay.classList.remove('fade-in');

    navMenu.classList.add('fade-out');
    navOverlay.classList.add('fade-out');

    setTimeout(() => {
      navOverlay.classList.remove('nav__overlay','fade-out');
      navMenu.classList.remove('fade-out');
    }, 500);
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