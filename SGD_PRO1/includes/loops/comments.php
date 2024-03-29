<?php
 
// Do not delete this section
if (isset($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME'])){
  die ('Please do not load this page directly. Thanks!'); }
if ( post_password_required() ) { ?>
  <div class="alert alert-warning">
    <?php _e('Dieser Bereich ist Passwort geschützt.', 'sgd'); ?>
  </div>
<?php
  return; 
}
// End do not delete section
 
if (have_comments()) : ?>

<h3><?php _e('Feedback', 'sgd'); ?></h3>
<p class="text-muted" style="margin-bottom: 20px;">
<?php _e('Kommentare', 'sgd');  ?>: <?php comments_number(__('Keine', 'sgd'), '1', '%'); ?>
</p>
<ol class="commentlist">
    <?php wp_list_comments('type=comment&callback=sgd_comment');?>
</ol>

<ul class="pagination">
    <li class="older"><?php previous_comments_link() ?></li>
    <li class="newer"><?php next_comments_link() ?></li>
</ul>

<?php
  else :
	  if (comments_open()) :
  echo "<p class='alert alert-info'>" . __('Sei der Erste der ein Komentar schreibt.', 'sgd') . "</p>";
		else :
			echo "<p class='alert alert-warning'>" . __('Kommentare wurden geschlossen.', 'sgd') . "</p>";
		endif;
	endif;
?>

<?php if (comments_open()) : ?>
<section id="respond">
  <h3><?php comment_form_title(__('Dein Feedback', 'sgd'), __('Erstellt zu %s', 'sgd')); ?></h3>
  <p><?php cancel_comment_reply_link(); ?></p>
  <?php if (get_option('comment_registration') && !is_user_logged_in()) : ?>
  <p><?php printf(__('Sie müssen <a href="%s">angemeldet</a> sein um ein Kommentar zu schreiben', 'sgd'), wp_login_url(get_permalink())); ?></p>
  <?php else : ?>
  <form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
    <?php if (is_user_logged_in()) : ?>
    <p>
      <?php printf(__('Angemeldet als', 'sgd') . ' <a href="%s/wp-admin/profile.php">%s</a>.', get_option('siteurl'), $user_identity); ?>
      <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="<?php __('Von diesem Account abmelden', 'sgd'); ?>"><?php echo __('Abmelden', 'sgd') . ' <i class="glyphicon glyphicon-arrow-right"></i>'; ?></a>
    </p>
    <?php else : ?>
    <div class="form-group">
      <label for="author"><?php _e('Dein Name', 'sgd'); if ($req) echo ' <span class="text-muted">' . __('(erforderlich)', 'bst') . '</span>'; ?></label>
      <input type="text" class="form-control" name="author" id="author" placeholder="<?php _e('Dein Name', 'sgd'); ?>" value="<?php echo esc_attr($comment_author); ?>" <?php if ($req) echo 'aria-required="true"'; ?>>
    </div>
    <div class="form-group">
      <label for="email"><?php _e('Deine E-Mail Adresse', 'sgd'); if ($req) echo ' <span class="text-muted">' . _e('(erforderlich wird nicht veröffentlicht', 'sgd') . '</span>'; ?></label>
      <input type="email" class="form-control" name="email" id="email" placeholder="<?php _e('Deine E-Mail-Adresse', 'sgd'); ?>" value="<?php echo esc_attr($comment_author_email); ?>" <?php if ($req) echo 'aria-required="true"'; ?>>
    </div>
    <div class="form-group">
      <label for="url"><?php echo __('Deine Webseite', 'sgd') . ' <span class="text-muted">' . __('nicht erforderlich', 'sgd') . '</span>'; ?></label>
      <input type="url" class="form-control" name="url" id="url" placeholder="<?php _e('Deine Webseite', 'bst'); ?>" value="<?php echo esc_attr($comment_author_url); ?>">
    </div>
    <?php endif; ?>
    <div class="form-group">
      <label for="comment"><?php _e('Dein Kommentar', 'sgd'); ?></label>
      <textarea name="comment" class="form-control" id="comment" placeholder="<?php _e('Dein Kommentar', 'sgd'); ?>" rows="8" aria-required="true"></textarea>
    </div>
    <p><input name="submit" class="btn btn-default" type="submit" id="submit" value="<?php _e('Absenden', 'sgd'); ?>"></p>
    <?php comment_id_fields(); ?>
    <?php do_action('comment_form', $post->ID); ?>
  </form>
  <?php endif; ?>
</section>
<?php endif; ?>
