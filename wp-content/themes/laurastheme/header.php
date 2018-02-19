<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset');?>">
    <title><?php bloginfo('name');?> | <?php wp_title();?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
  </head>

  <body>

  <nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand" href="#">LAHF</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <?php
          wp_nav_menu( array(
           'theme_location'    => 'first',
           'depth'             => 0,
           'container'         => 'div',
           'container_class'   => 'ml-auto',
           'container_id'      => 'bs-example-navbar-collapse-1',
           'menu_class'        => 'navbar-nav firstnavul',
           'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
           'walker'            => new WP_Bootstrap_Navwalker())
          );
          wp_nav_menu( array(
           'theme_location'    => 'second',
           'depth'             => 0,
           'container_id'      => 'bs-example-navbar-collapse-1',
           'container_class'   => 'ml-auto',
           'menu_class'        => 'navbar-nav navsecondstuff',
           'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
           'walker'            => new WP_Bootstrap_Navwalker())
          );
          wp_nav_menu( array(
           'theme_location'    => 'third',
           'depth'             => 0,
           'container_id'      => 'bs-example-navbar-collapse-1',
           'container_class'   => 'ml-auto',
           'menu_class'        => 'navbar-nav navthirdstuff',
           'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
           'walker'            => new WP_Bootstrap_Navwalker())
          );
      ?>
    </div>
  </nav>

   