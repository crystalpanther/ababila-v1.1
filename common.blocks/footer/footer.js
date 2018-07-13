/**
 * Created by elina on 7/4/2018.
 */
// /** MENU MOBILE SUBMENU FOOTER...*/
$('.footer-mobile__title').click(function() {
    $(this).next($('.footer-mobile__lists')).toggleClass('footer-mobile__lists-active');
});