/**
 * Created by elina on 7/2/2018.
 */
$(document).ready(function(){
    // menu click event
    $('.menu-mobile__hamburger').click(function() {
        $(this).toggleClass('menu-mobile__hamburger-animate');
        if (!$(this).hasClass('menu-mobile__hamburger-animate')) {
            $('.menu-mobile').removeClass('menu-mobile-active');
        } else {
            $('.menu-mobile').addClass('menu-mobile-active');
        }
    });

    $('.menu-mobile-item-exp').click(function() {
        $(this).toggleClass('menu-mobile-item-exp-active');
        if (!$(this).hasClass('menu-mobile-item-exp-active')) {
            $('.menu-mobile__submenu').removeClass('menu-mobile__submenu-active');
            $('.menu-mobile-item-exp__icon').removeClass('menu-item-exp__icon-active');
        } else {
            $('.menu-mobile__submenu').addClass('menu-mobile__submenu-active');
            $('.menu-mobile-item-exp__icon').addClass('menu-item-exp__icon-active');
        }
    });

    $('.menu-item-exp').click(function() {
        $(this).toggleClass('menu-item-exp-active');
        if (!$(this).hasClass('menu-item-exp-active')) {
            $('.menu__submenu').removeClass('menu__submenu-active');
            $('.menu-item-exp__icon').removeClass('menu-item-exp__icon-active');
        } else {
            $('.menu__submenu').addClass('menu__submenu-active');
            $('.menu-item-exp__icon').addClass('menu-item-exp__icon-active');
        }
    });
});