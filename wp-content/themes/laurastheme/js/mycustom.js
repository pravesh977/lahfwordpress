console.log("hello");


// function to change nav color reference https://medium.com/@_patrickcameron/a-complete-beginner-s-guide-to-changing-background-colour-on-scroll-using-jquery-fce686d55049
$(function() {
        $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('nav').addClass('changeColor')
        }
        if ($(this).scrollTop() < 300) {
            $('nav').removeClass('changeColor')
        }
        });

});

$('.carousel').carousel({
    "pause": "false"
});