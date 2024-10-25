
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel3', {
    //    type   : 'loop',
       drag   : 'free',
       pagination : false,
    //    autoplay: true,
    //    interval: 3000,
    //    padding: '2rem',
    padding: { left: '.1rem', right: '5rem' },
       perPage    : 5,
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