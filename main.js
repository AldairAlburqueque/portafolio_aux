// MENU-HAMBURGUESA

const iconMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')
const links = document.querySelectorAll('.menu li a')

iconMenu.addEventListener('click', function(){
    menu.classList.toggle('menu-show')
})

links.forEach((link) => {
    link.addEventListener('click', function(){
        menu.classList.toggle('menu-show')
    })
});

function getsize() {
    let slidesX = 1.5
    let spaceBtwn = 2
    let ancho = document.documentElement.clientWidth
    if (ancho>810) {
      slidesX = 3;
      spaceBtwn = 30;
    }
    const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: slidesX,
    spaceBetween: spaceBtwn,
  });
  }