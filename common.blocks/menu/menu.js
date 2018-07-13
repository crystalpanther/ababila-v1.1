/**
 * Created by elina on 7/2/2018.
 */

// /** MENU hamburger ...*/
$('.menu-mobile__button').click(function() {
    $('.menu-mobile__hamburger').toggleClass('menu-mobile__hamburger-animate');
    $('.menu-mobile').toggleClass('menu-mobile-active');
});
// /** MENU MOBILE SUBMENU...*/
$('.menu-mobile-item-exp').click(function() {
    $('.menu-mobile__submenu').toggleClass('menu-mobile__submenu-active');
    $('.menu-mobile-item-exp__icon').toggleClass('menu-item-exp__icon-active');
});
// /** MENU SUBMENU...*/
$('.menu-item-exp').click(function() {
    $('.menu__submenu').toggleClass('menu__submenu-active');
    $('.menu-item-exp__icon').toggleClass('menu-item-exp__icon-active');
});