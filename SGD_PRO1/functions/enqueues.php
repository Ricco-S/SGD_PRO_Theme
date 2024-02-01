<?php

function sgd_enqueues() {



	wp_register_style('bootstrap-css', get_template_directory_uri() . '/css/bootstrap-3-4-1.css', false, '3.4.1', null);
	wp_enqueue_style('bootstrap-css');

  	wp_register_style('wp-css', get_template_directory_uri() . '/css/wp.css', false, null);
	wp_enqueue_style('wp-css');

  	wp_register_script('modernizr', get_template_directory_uri() . '/js/modernizr-2.8.3.min.js', false, null, false);
	wp_enqueue_script('modernizr');
    
    
    
    
    
    
  //  wp_register_script('jquery-3-6-3-js', get_template_directory_uri() . '/js/jquery-3-6-3.min.js', false, null, true);
  //  wp_enqueue_script('jquery-3-6-3-js');

  	wp_register_script('bootstrap-3-4-1-js', get_template_directory_uri() . '/js/bootstrap-3-4-1.min.js', false, null, true);
	wp_enqueue_script('bootstrap-3-4-1-js'); 
  
    wp_register_script('sgd-js', get_template_directory_uri() . '/js/sgd.js', false, null, true);
	wp_enqueue_script('sgd-js');
  
  
    //wp_register_script('jquery-mobile-js', get_template_directory_uri() . '/js/jquery-mobile.js', false, null, true);
	//wp_enqueue_script('jquery-mobile-js');
    
    //wp_register_script('aos-js', get_template_directory_uri() . '/js/aos.js', false, null, true);
	//wp_enqueue_script('aos-js');
    
    //wp_register_script('fancybox3-min-js', get_template_directory_uri() . '/js/jquery.fancybox3.min.js', false, null, true);
    //wp_enqueue_script('fancybox3-min-js');
  
    //wp_register_script('bs-hero-carousel', get_template_directory_uri() . '/js/bs-hero-carousel.js', false, null, true);
	//wp_enqueue_script('bs-hero-carousel');
 
    //wp_register_script('gallery-filter-js', get_template_directory_uri() . '/js/gallery-filter.min.js', false, null, true);
	//wp_enqueue_script('gallery-filter-js');
    
    
    
    

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'sgd_enqueues', 100);



// Move all Scripts to Footer
add_action( 'wp_enqueue_scripts', 'js_to_footer' );

function js_to_footer() {
  remove_action( 'wp_head', 'wp_print_scripts' );
  remove_action( 'wp_head', 'wp_print_head_scripts', 9 );
  remove_action( 'wp_head', 'wp_enqueue_scripts', 8 );
}




