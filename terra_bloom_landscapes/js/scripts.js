const hambutton = document.querySelector('#hamburgerBtn');

hambutton.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle('open');
})




// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    //start autoplay
    autoplay: {
        delay: 5000,
    },
  });
