
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset');?>">
    <title><?php bloginfo('name');?> | <?php wp_title();?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
  </head>

  <body>
  <!-- <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button> -->
  



<!-- carousel reference https://stackoverflow.com/questions/46431138/fade-transition-for-carousel-in-bootstrap-4-beta -->
<div id="carousel" class="carousel carousel-fade" data-ride="carousel" data-interval="3000">
<nav class="navbar navbar-expand-md navbar-light fixed-top">
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
			<div class="carousel-inner" role="listbox">
      <div class="carouseltext">
            <form class="signupform">
                <label>Sign up for a free newsletter!</label>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" placeholder= "Name">
                    </div>
                    <div class="form-group col-md-4">
                        <input type="email" class="form-control" placeholder= "Email">
                    </div>
                    <div class="form-group col-md-2">
                    <button type="submit" class="btn">Submit</button>
                    </div>
               </div>               
            </form>
        </div>
				<div class="carousel-item active">
          <img class="d-block w-100" src="<?php bloginfo('template_url'); ?>/imageslaura/mainslide1.jpeg" alt="First slide">
          <!-- <p class="animatedcarouseltext">animated text 1</p> -->
          <div class="carousel-caption">
          <p class="animated fadeInLeft">hey hey hey first</p>
          </div>
				</div> <!-- close carousel-item 1 -->
				<div class="carousel-item" style="position: absolute; top:0px; width: 100% ; height: 100%">
          <img class="d-block w-100" src="<?php bloginfo('template_url'); ?>/imageslaura/mainslide2.jpeg" alt="Second slide">
          <!-- <p class="animatedcarouseltext">second animated</p> -->
				</div> <!-- close carousel-item 2 -->
				<div class="carousel-item" style="position: absolute; top:0px; width: 100% ; height: 100%">
          <img class="d-block w-100" src="<?php bloginfo('template_url'); ?>/imageslaura/lauraslide1.jpg" alt="Third slide">
          <!-- <p class="animatedcarouseltext">third animated</p> -->
				</div> <!-- close carousel-item 3 -->
			</div> <!-- close carousel-inner -->

			<a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div> <!-- close carousel -->

<h1>hello</h1>






<div class="formdisplayer">
    <p>sign up form for mobile view</p>
</div>

<div class="firstdiv">
</div>

<?php get_footer(); ?>