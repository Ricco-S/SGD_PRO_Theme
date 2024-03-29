<?php
/*
The Single Posts Loop
=====================
*/
?> 

<?php if(have_posts()): while(have_posts()): the_post(); ?>
    <article role="article" id="post_<?php the_ID()?>" <?php post_class()?>>
        <header>
            <h2><?php the_title()?></h2>
            <h4>
                <small>
                    <span class="text-muted author"><?php _e('Von', 'sgd'); echo " "; the_author() ?>,</span>
                    <time  class="text-muted" datetime="<?php the_time('l, F j, Y')?>"><?php the_time('l, j.F  Y') ?></time>
                </small>
            </h4>
            <p class="text-muted" style="margin-bottom: 30px;">
            <?php _e('Kategorie ', 'sgd'); ?>: <?php the_category(', ') ?><br/>
            <?php _e('Kommentare', 'sgd'); ?>: <?php comments_popup_link(__('Keine', 'sgd'), '1', '%'); ?>
            </p>
        </header>
        <section>
            <?php the_post_thumbnail(); ?>
            <?php the_content()?>
            <?php wp_link_pages(); ?>
        </section>
    </article>
<?php comments_template('/includes/loops/comments.php'); ?>
<?php endwhile; ?>
<?php else: ?>
<?php wp_redirect(get_bloginfo('siteurl').'/404', 404); exit; ?>
<?php endif; ?>
