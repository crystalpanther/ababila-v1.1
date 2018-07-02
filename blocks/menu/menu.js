/**
 * Created by elina on 7/2/2018.
 */
$(document).ready(function(){
    // menu click event
    $('.menu-mobile__hamburger').click(function() {
        $(this).toggleClass('menu-mobile__hamburger-animate');
        if($(this).hasClass('menu-mobile__hamburger-animate')) {
            $('.menu-mobile').addClass('menu-mobile-active');
        }
        else {
            $('.menu-mobile').removeClass('menu-mobile-active');
        }
    });
});