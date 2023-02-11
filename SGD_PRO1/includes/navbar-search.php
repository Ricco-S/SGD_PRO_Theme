<?php
/*
Navbar search form
==================
If you don't want a search form in your navbar, then delete the link to this PHP page from within the navbar in header.php.
Then you can insert the Search Widget into the sidebar.
*/
?>

<form class="hidden-md navbar-form navbar-right" role="search" method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div class="form-group">
		<input class="form-control" type="text" value="<?php echo get_search_query(); ?>" placeholder="Suche..." name="s" id="s">
	
	<button type="submit" id="searchsubmit" value="<?php esc_attr_x('Suche', 'sgd') ?>" class="btn btn-default">
    <i class="icon-search">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>   
    </i>
    </button>
    </div>
</form>
