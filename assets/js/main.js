

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
/*======================================== Value JS ========================================*/
const accordionItems = document.querySelectorAll ('.value_accordion-item')

accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector('.value_accordion-header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')
    
    toggleItem(item)

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.value_accordion-content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')

  }
}
/*========================================  ========================================*/

