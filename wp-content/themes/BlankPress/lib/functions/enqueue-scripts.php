<?php
/**
 * ENQUEUE SCRIPTS
 * Injects theme javascript files to the document
 * Load additional scripts using the same method
 * Reference: http://codex.wordpress.org/Function_Reference/wp_enqueue_script
 * ----------------------------------------------------------------------------
 */

if (!function_exists('blankpress_scripts')) :
  function blankpress_scripts() {

    // deregister the jquery version bundled with wordpress
    wp_deregister_script( 'jquery' );

    // enqueue modernizr, jquery and foundation
    wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/lib/javascripts/modernizr.js', false ,'1.0', false );
    wp_enqueue_script( 'jquery', 'http://code.jquery.com/jquery-2.1.0.min.js', false ,'1.0', true );
    wp_enqueue_script( 'foundation', get_template_directory_uri() . '/lib/javascripts/global-min.js', true ,'1.0', true );
  
  }

  add_action( 'wp_enqueue_scripts', 'blankpress_scripts' );
endif;

?>