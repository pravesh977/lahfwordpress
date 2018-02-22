console.log("hello");


// function to change nav color reference https://medium.com/@_patrickcameron/a-complete-beginner-s-guide-to-changing-background-colour-on-scroll-using-jquery-fce686d55049
$(function () {
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

// $(function() {
//     if(screen.width < 700) {
//         $('nav').removeClass('fixed-top')
//     }
// });
// let mynav = document.querySelector('#mynav');
// function removeclasser() {
//     if(screen.width < 700) {
//         mynav.classList.remove('fixed-top')
//     }
//     if(screen.width > 700) {
//         mynav.classList.add('fixed-top')
//     }
// }
// removeclasser();


// Animating the carousel's captions
