$('.catalog-nav-mobile__title-sub').click(function() {
    $(this).next('.catalog-nav-mobile__submenu').toggleClass('catalog-nav-mobile__submenu-active');
});
$('.catalog-nav-hidden__head').click(function() {
    $(this).next('.catalog-nav-hidden__main').toggleClass('catalog-nav-hidden__main-active');
});