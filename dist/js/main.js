
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel2', {
    //    type   : 'loop',
       drag   : 'free',
       pagination : false,
    //    autoplay: true,
    //    interval: 3000,
    //    padding: '2rem',
    padding: { left: '.1rem', right: '5rem' },
       perPage    : 3,
       breakpoints: {
          640: {
             perPage: 1,
          },
          768: {
             perPage: 2,
          },
          960: {
             perPage: 3,
          },
       },
    } ).mount();
  }
  );

//   all pages navbar
const nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
   nav.classList.toggle('stick', window.scrollY > 0);
});

// nav bar search
const search_input = document.querySelector('.search-input');
    document.addEventListener('click', () => {
         if(event.target.closest('.search-toggle-btn')) {
            search_input.classList.add('increase-width');
         }
         else if(event.target.closest('.search-input')) {
            search_input.classList.add('increase-width');
         }
         else if(search_input.value !== '') {
            search_input.classList.add('increase-width');
         }
         else {
            search_input.classList.remove('increase-width');
            search_input.value = '';
         }
    });