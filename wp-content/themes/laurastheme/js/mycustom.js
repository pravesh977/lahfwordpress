console.log("hello");

// function to change nav color reference https://medium.com/@_patrickcameron/a-complete-beginner-s-guide-to-changing-background-colour-on-scroll-using-jquery-fce686d55049
$(function() {
    if ($(window).width() > 700) {
        $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('nav').addClass('changeColor')
        }
        if ($(this).scrollTop() < 300) {
            $('nav').removeClass('changeColor')
        }
        });
    }
    else if ($(window).width() < 700) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('nav').addClass('changeColorSmall')
            }
            if ($(this).scrollTop() < 300) {
                $('nav').removeClass('changeColorSmall')
            }
            });
 }
});