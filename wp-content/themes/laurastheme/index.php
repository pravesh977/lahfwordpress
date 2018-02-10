
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  <?php get_header(); ?>

        <div class="carouseltext">
            <!-- <form>
                <label>Sign up</label><br>
                <input type="name" placeholder="Name">
                <input type="email" placeholder="Email">
            </form> -->
            <form class="signupform">
                <label>Sign up</label>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" placeholder= "Name">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="email" class="form-control" placeholder= "Email">
                    </div>
               </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src="<?php bloginfo('template_url'); ?>/imageslaura/lauraslide1.jpg" alt="First slide">
      <!-- <div class="carouseltext">
            <p>hey</p>
        </div> -->
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="<?php bloginfo('template_url'); ?>/imageslaura/lauraslide2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="<?php bloginfo('template_url'); ?>/imageslaura/lauraslide3.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h1>hello</h1>
<div class="formdisplayer">
    <p>sign up form for mobile view</p>
</div>

<div class="firstdiv">
</div>

<?php get_footer(); ?>