

/*========================================  ========================================*/
/*======================================== CHANGE BACKGROUND HEADER ========================================*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*======================================== Swiper JS ========================================*/
var swiperPopular = new Swiper(".popular_container", {
    spanceBetween:32,
    grabCursor: true,
    centeredSliders: true,
    slidersPerView: 'auto',
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/*========================================  ========================================*/

