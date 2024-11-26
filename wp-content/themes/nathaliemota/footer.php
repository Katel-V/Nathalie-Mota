<footer>
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('mentions-legales'))); ?>">Mentions Légales</a>
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('vie-privee'))); ?>">Vie Privée</a>
            <p>Tous droits réservés</p>


    <?php get_template_part ('template-parts/contact-modal.php'); ?>
    
<?php wp_footer(); ?>

</body>
</html>
  