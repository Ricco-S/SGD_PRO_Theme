 jQuery(function ($) {
	
	"use strict";
  
    $(document).ready(function () {

        // Adding Bootstrap classes to the Comments stuff
        $(".commentlist li").addClass("panel panel-default");
        $(".comment-reply-link").addClass("btn btn-default");
  
// =====  HOVERNAV - navbar dropdown on hover.
      
      
        // Delete this segment if you don't want it, and delete the corresponding CSS in bst.css
        // Uses jQuery Media Query - see http://www.sitepoint.com/javascript-media-queries/
        
        /*
        var mq = window.matchMedia('(min-width: 768px)');
        if (mq.matches) {
            $('ul.shop-nav.navbar-nav > li').addClass('hovernav');
        } else {
            $('ul.shop-nav.navbar-nav > li').removeClass('hovernav');
        }
        // The addClass/removeClass also needs to be triggered on page resize <=> 768px
        function WidthChange(mq) {
            if (mq.matches) {
                $('ul.shop-nav.navbar-nav > li').addClass('hovernav');
            } else {
                $('ul.shop-nav.navbar-nav > li').removeClass('hovernav');
            }
        }
        if (matchMedia) {
            var mq = window.matchMedia('(min-width: 768px)');
            mq.addListener(WidthChange);
            WidthChange(mq);
        }
        
        
        */
        
        // Restore "clickable parent links" in HOVERNAV navbar(s)
        // (Also makes the bold CHILD links clickable in the MEGANAV megamenu (see below)
        //$('.hovernav a').click(function () {
        //    window.location = this.href;
        //});
  
// =====   MEGANAV - allows GRAND-CHILD links to be displayed in a mega-menu on screens larger than phones.
      
        // Delete this segment if you don't want it, and delete the corresponding CSS in style.css
       // $('.navbar').addClass('meganav');
      //  $('.meganav .dropdown-menu .dropdown-menu').parent().addClass('has-children').parents('li').addClass('dropdown mega-menu');
  
        // Forms
        $('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
        $('input[type=submit]').addClass('btn btn-primary');
  
// =====  WOOCOMMERCE restyling
        // Delete this segment if you don't want it, and delete the corresponding CSS in style.css
        $('div.woocommerce').wrapInner('<article></article>');
        $('.woocommerce-pagination ul').css({"border": 0}).removeClass().addClass('pagination pagination-lg');
        $('.woocommerce-pagination li').css({border: 0});
        $('.woocommerce-pagination .next').text('»');
        $('.woocommerce-pagination .prev').text('«');
        $('.woocommerce-pagination .current').removeClass().addClass('active').css({background: "#e7e7e7"});
        $('.woocommerce-message a.button.wc-forward').removeClass().addClass('btn btn-success').append('&nbsp; <i class="glyphicon glyphicon-arrow-right"></i>').css({display: "block", float: "right", marginTop: -7});
        $('.woocommerce a.button.wc-backward').removeClass().addClass('btn btn-info').prepend('<i class="glyphicon glyphicon-arrow-left"></i> &nbsp;').css({display: "inline-block"});
        $('.woocommerce-message').removeClass().addClass('alert alert-success');
        $('.woocommerce-info').removeClass().addClass('alert alert-warning');
        $('.woocommerce .cart button').removeClass().addClass('btn btn-primary').css({height: 28, paddingTop: 3});
        $('.woocommerce .shipping-calculator-button').addClass('btn btn-primary btn-block').css({height: 34});
        $('.shipping-calculator-form .button').removeClass().addClass('btn btn-success btn-block');
        $('.woocommerce input[type=submit]').removeClass().addClass('btn btn-primary').css({height: 34});
        $('.woocommerce input[name=proceed]').removeClass().addClass('btn btn-success');
    });
  


// =====  Affix Navbar
        $(document).ready(function(){
            
            var navDiv = '#nav1';
            
            //$('.off-navbar-header-sgd').css('height', $(navDiv).height());
                        
            $(navDiv).affix({
                offset: $(navDiv).position()
            });
           
            $( '#nav1' ).on( 'affix.bs.affix', function(){
             if( !$( window ).scrollTop() ) return false;
             });
           $(window).on('resize', $.resetAffix);
        });
   
   
   
// ===== To-Top Button

  var $window = $(window);
  var $buttonTop = $('.button-top');
  var scrollTimer;

  $buttonTop.on('click', function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 340);
  });

  $window.on('scroll', function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
     if ($window.scrollTop() > 10) {
        $buttonTop.addClass('button-top-visible');
      } else {
        $buttonTop.removeClass('button-top-visible');
      }         
    }, 180, 'slideIn');
  });  

// ===== Smooth scrolling to id

	$('a[href^="#"]').on('click',function (e) {
		//e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		if ( $(window).width() > 1023 ) {
			var $scrollTop = $target.offset().top-0;
		} else {
			var $scrollTop = $target.offset().top;
		}

		$('html, body').stop().animate({
			'scrollTop': $scrollTop
		}, 900, 'swing');
	});




// ===== Close mobile Navbar on click
(function($) {
    var $window = $(window),
        $div = $('.navbar-wrapper');

    $window.resize(function resize(){
        if ($window.width() < 767) {
            return $div.addClass('navbar-fixed-mobile');
        }

        $div.removeClass('navbar-fixed-mobile');
    }).trigger('resize');
})(jQuery);
   


// Close nav toggle on mobile
$(function () {
$('.navbar-collapse ul li a').click(function() {
   $('.navbar-toggle:visible').click();
});
}); 
   
     
     
$('p:empty').remove();
    
});


// =====  Make Dropdown Klickable add class dropdown-link
$('li.dropdown').on('click', function() {
    var $el = $(this);
    if ($el.hasClass('dropdown-link')) {
        var $a = $el.children('a.dropdown-toggle');
        if ($a.length && $a.attr('href')) {
            location.href = $a.attr('href');
        }
    }
});
