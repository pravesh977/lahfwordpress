<?php 
    // Register Custom Navigation Walker
    require_once get_template_directory() . '/wp-bootstrap-navwalker.php';
    function addingStyleSheet() {
        wp_enqueue_style('bootstrap_css', get_template_directory_uri() . '/css/bootstrap.css');
        wp_enqueue_style('style', get_stylesheet_uri());
    }
add_action('wp_enqueue_scripts', 'addingStyleSheet'); 

//     function theme_js() {
//         global $wp_scripts;
//         wp_enqueue_script( 'bootstrap_js', get_template_directory_uri() . '/js/jquery-3.2.1.min.js' );
//         wp_enqueue_script( 'bootstrap_js', get_template_directory_uri() . '/js/bootstrap.js', array('jquery'), '', true );
//     }

// add_action( 'wp_enqueue_scripts', 'theme_js');

//navigation menus registering
function navigationhooking() {
    register_nav_menus( array(
        'primary' => __( 'Primary Menu'),
    ) );
}
add_action('after_setup_theme', 'navigationhooking');
?>