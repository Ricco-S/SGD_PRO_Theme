jQuery(document).ready(function() {     

// Swiper: Hero Slider 
	  var mySwiper1 = new Swiper ('.hero-slider', {
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });

// Swiper: Post Slider 1
        var mySwiper2 = new Swiper ('.post-slider-one', {
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        spaceBetween: 15,
        breakpoints: {
            1450: {
                slidesPerView: 4,
                spaceBetween: 8
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 8
            }
        }
    }); 
  
// Swiper: Grid Slider 1
        var mySwiper3 = new Swiper ('.grid-slider-1', {
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        spaceBetween: 15,
        breakpoints: {
            1450: {
                slidesPerView: 4,
                spaceBetween: 8
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 8
            }
        }
    });
  
  
 
// Swiper: Content Slider TEXT
    var mySwiper4 = new Swiper ('.text-slider', {
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      parallax: true,
      autoplay: false,
      speed: 900,

    }); 

  
// Swiper: Logo Slider 1
        var mySwiper5 = new Swiper ('.logo-slider-one', {
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        spaceBetween: 15,
        breakpoints: {
            1450: {
                slidesPerView: 5,
                spaceBetween: 8
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 8
            }
        }
    }); 

//END 
});