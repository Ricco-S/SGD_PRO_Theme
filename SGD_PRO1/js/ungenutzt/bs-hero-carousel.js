$(document).ready(function() {  
  		 $("#carousel-example-generic").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $("#carousel-example-generic").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  
	}); 
//<![CDATA[
var carouselContainer = $('.carousel');
var slideInterval = 5000;
	
	function toggleH(){
		$('.toggleHeading').hide()
		var caption = carouselContainer.find('.active').find('.toggleHeading').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function (){
			$(this).removeClass('animated')});
	caption.slideToggle();
	}
	
	function toggleC(){
		$('.toggleCaption').hide()
		var caption = carouselContainer.find('.active').find('.toggleCaption').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function (){
			$(this).removeClass('animated')
	});
	caption.slideToggle();
	}
carouselContainer.carousel({
interval: slideInterval, cycle: true, pause: "none"})
.on('slide.bs.carousel slid.bs.carousel', toggleH).trigger('slide.bs.carousel')
.on('slide.bs.carousel slid.bs.carousel', toggleC).trigger('slide.bs.carousel');


//]]>