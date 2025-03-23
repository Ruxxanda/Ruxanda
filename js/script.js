// miscarea textului la abilitati
const textTop = document.querySelector('.text-top');
const textBottom = document.querySelector('.text-bottom');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    const moveAmount = scrollPosition * 0.2;

    textTop.style.transform = `translateX(-${moveAmount}px)`;
    textBottom.style.transform = `translateX(-${moveAmount}px)`;
});


// schimbarea anului
const currentYear = new Date().getFullYear();

document.querySelectorAll('.anul').forEach(function(element) {
  element.textContent = currentYear;
});





// hamburgherul
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // să nu închidă imediat
  sideMenu.classList.add('active');
});

document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && e.target !== menuBtn) {
    sideMenu.classList.remove('active');
  }
});
