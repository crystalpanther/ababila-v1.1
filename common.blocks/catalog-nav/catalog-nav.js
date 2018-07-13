$('.catalog-nav-mobile__title-sub').click(function() {
    $(this).next('.catalog-nav-mobile__submenu').toggleClass('catalog-nav-mobile__submenu-active');
});
$('.catalog-nav-hidden-mobile__title-sub').click(function() {
    $(this).next('.catalog-nav-hidden-mobile__submenu').toggleClass('catalog-nav-hidden-mobile__submenu-active');
});


$('.catalog-nav-hidden__head').click(function() {
    $(this).next('.catalog-nav-hidden__main').toggleClass('catalog-nav-hidden__main-active');
});
$('.catalog-nav-hidden-mobile__head').click(function() {
    $(this).next('.catalog-nav-hidden-mobile__main').toggleClass('catalog-nav-hidden-mobile__main-active');
});