      <?php get_header(); ?>
      <div class="landingslidediv">
        <?php echo do_shortcode('[crellyslider alias="landingpageslider"]')?>
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
    <div class="formdisplayer">
        <p>sign up form for mobile view</p>
    </div>
  <p>About Laura</p>
    <div class="indexaboutdiv">
      <img class="img-fluid" src="<?php bloginfo('template_url'); ?>/imageslaura/about-pic3.jpg" alt="About Laura">
      <div class="aboutimagetext">
            <p>About <span>Laura</span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam cum repudiandae iusto laborum maxime at hic possimus saepe architecto! Perferendis ipsum eveniet accusamus velit ipsa iste harum obcaecati. Accusamus?
            Atque dolorem quas voluptatum incidunt excepturi doloremque laudantium natus, dolores iste doloribus sint animi eius, blanditiis assumenda enim labore. Consequuntur eveniet, nisi minima reprehenderit perferendis veritatis dolores neque aut quam!
            Quod expedita inventore vitae beatae sit suscipit atque illum, molestiae aliquam corrupti rerum porro saepe ducimus delectus illo non consectetur numquam nisi assumenda voluptatibus corporis. Nam voluptatum libero quo quae.
            Tenetur commodi id eos error. Officiis adipisci ducimus ipsam corrupti pariatur perspiciatis recusandae, nobis sequi minima tenetur ipsa asperiores cumque amet praesentium impedit, optio vel reiciendis quo, numquam quia cupiditate.
            Temporibus eius recusandae ipsa a dolorem iusto repellat ab iste perspiciatis quisquam corporis, vitae et eligendi! Dignissimos, vel voluptate eius ea quidem sunt iure at veritatis! Odit qui et quaerat!
          </p>
          <a href="#">Learn More</a>
      </div>
    </div>
    <div class="freevideosdiv">
      <p class="freevideosp">free videos</p>
      <?php echo do_shortcode('[Total_Soft_Gallery_Video id="1"]');?>
    </div>


  <?php get_footer(); ?>