$('.catalog-nav__item').click(function() {
    $(this).toggleClass('catalog-nav__item-active');
    if (!$(this).hasClass('catalog-nav__item-active')) {
        $(this).find($('.catalog-nav-mobile__submenu')).removeClass('catalog-nav-mobile__submenu-active');
        // $('.menu-mobile-item-exp__icon').removeClass('menu-item-exp__icon-active');
    } else {
        $(this).find($('.catalog-nav-mobile__submenu')).addClass('catalog-nav-mobile__submenu-active');
        // $('.menu-mobile-item-exp__icon').addClass('menu-item-exp__icon-active');
    }
});