<?php
/*
The Default Loop (used by index.php and category.php)
=====================================================

If you require only post excerpts to be shown in index and category pages, then use the [---more---] line within blog posts.

If you require different templates for different post types, then simply duplicate this template, save the copy as, e.g. "content-aside.php", and modify it the way you like it. (The function-call "get_post_format()" within index.php, category.php and single.php will redirect WordPress to use your custom content template.)

Alternatively, notice that index.php, category.php and single.php have a post_class() function-call that inserts different classes for different post types into the <section> tag (e.g. <section id="" class="format-aside">). Therefore you can simply use e.g. .format-aside {your styles} in css/sgd.css style the different formats in different ways.
*/
?>

<?php if(have_posts()): while(have_posts()): the_post();?>
    <article role="article" id="post_<?php the_ID()?>">
        <header>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title()?></a></h2>
            <h4>
              <small>
                <span class="text-muted author"><?php _e('Von', 'sgd'); echo " "; the_author() ?>,</span>
                <time  class="text-muted" datetime="<?php the_time('d-m-Y')?>"><?php the_time('l. j F. Y') ?></time>
              </small>
            </h4>
        </header>
        <section>
            <?php the_post_thumbnail(); ?>
            <?php the_content( __( '&hellip; ' . __('Weiterlesen', 'sgd' ) . ' <i class="glyphicon glyphicon-arrow-right"></i>', 'sgd' ) ); ?>
        </section>
        <footer>
            <p class="text-muted" style="margin-bottom: 20px;">
             <?php _e('Kategorie', 'sgd'); ?>: <?php the_category(', ') ?><br/>
             <?php _e('Kommentare', 'sgd'); ?>: <?php comments_popup_link(__('Keine', 'sgd'), '1', '%'); ?>
            </p>
        </footer>
    </article>
<?php endwhile; ?>

<?php if ( function_exists('sgd_pagination') ) { sgd_pagination(); } else if ( is_paged() ) { ?>
  <ul class="pagination">
    <li class="older"><?php next_posts_link('<i class="glyphicon glyphicon-arrow-left"></i> ' . __('Vorheriger', 'sgd')) ?></li>
    <li class="newer"><?php previous_posts_link(__('Nächster', 'sgd') . ' <i class="glyphicon glyphicon-arrow-right"></i>') ?></li>
  </ul>
<?php } ?>
<?php else: wp_redirect(get_bloginfo('siteurl').'/404', 404); exit; endif; ?>
