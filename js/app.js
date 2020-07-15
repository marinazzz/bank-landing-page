const navOverlay = document.querySelector('.nav__overlay');

navButton.addEventListener('click', function() {

  navMenu.classList.toggle('nav__menu--open');
  navButton.classList.toggle('nav__button--open');


  if (nav.classList.contains('nav--open')) {
    nav.classList.remove('nav--open');

    navOverlay.classList.add('fade-out');
    navOverlay.classList.remove('fade-in');

    navMenu.classList.add('fade-out');
    navMenu.classList.remove('fade-in');

  } else {
    nav.classList.add('nav--open');

    navOverlay.classList.add('fade-in')
    navOverlay.classList.remove('fade-out');

    navMenu.classList.add('fade-in')
    navMenu.classList.remove('fade-out');
  }

});