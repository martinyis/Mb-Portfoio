const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
const body = document.querySelector('body');
const headerLink = document.querySelectorAll('.header__link');
burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
  body.classList.toggle('no-scroll');
});
headerLink.forEach((item) => {
  item.addEventListener('click', function () {
    overlay.classList.remove('overlay');
    body.classList.remove('no-scroll');
    burgerMenu.classList.remove('close');
  });
});
//Reveal sections==============================================================================
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add('section--animated');
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: window.screen.width >= 400 ? 0.3 : 0.1,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//===============================================//
const programsItems = document.querySelectorAll('.programs__item');

programsItems.forEach((programsItem) => {
  programsItem.addEventListener('click', () => {
    const websiteLink = programsItem.querySelector('.website');
    window.location.href = websiteLink.href;
  });
});
