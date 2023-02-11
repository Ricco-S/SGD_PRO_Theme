jQuery("#owl-hero-slider").owlCarousel({
  autoplay: false,
  lazyLoad: false,
  loop: true,
  margin: 0,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  touchDrag:true,
  mouseDrag:true,
  responsiveClass: true,
  autoHeight: false,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class='fa fa-angle-left owl-arrow content-slider left'></i>","<i class='fa fa-angle-right owl-arrow content-slider right'></i>"],
  items: 1
})

jQuery("#owl-post-slider-one").owlCarousel({
  autoplay: true,
  lazyLoad: false,
  loop: true,
  margin: 15,
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: false,
  touchDrag:true,
  mouseDrag:true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class='fa fa-angle-left owl-arrow post-slider left'></i>","<i class='fa fa-angle-right post-slider owl-arrow right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },

    800: {
      items: 3
    },

    1150: {
      items: 4
    },

    1450: {
      items: 4
    }
  }
});
jQuery("#owl-card-slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 20,
  /*animateOut: 'fadeOut',
  animateIn: 'fadeIn',*/
  touchDrag:true,
  mouseDrag:true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class='fa fa-angle-left owl-arrow card-slider left'></i>","<i class='fa fa-angle-right owl-arrow card-slider right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },

    800: {
      items: 3
    },

    1150: {
      items: 4
    },
    
    1450: {
      items: 4
    }
  }
})
jQuery("#owl-logo-slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 20,
  /*animateOut: 'fadeOut',
  animateIn: 'fadeIn',*/
  touchDrag:true,
  mouseDrag:true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class='fa fa-angle-left owl-arrow card-slider left'></i>","<i class='fa fa-angle-right owl-arrow card-slider right'></i>"],
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 2
    },

    900: {
      items: 3
    },

    1250: {
      items: 4
    },

    1550: {
      items: 4
    }
  }
})
jQuery("#owl-single-one").owlCarousel({
  autoplay: true,
  lazyLoad: false,
  loop: true,
  margin: 0,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  touchDrag:true,
  mouseDrag:true,
  responsiveClass: true,
  autoHeight: false,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class='fa fa-angle-left owl-arrow content-slider left'></i>","<i class='fa fa-angle-right owl-arrow content-slider right'></i>"],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }

  }
})
jQuery("#owl-text-slider").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  touchDrag:true,
  mouseDrag:true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class='fa fa-angle-left owl-arrow text-slider left'></i>","<i class='fa fa-angle-right text-slider owl-arrow right'></i>"],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }

  }
});