/**
 * Created by elina on 6/30/2018.
 */
$.fn.tab = function() {
    var selector = this,
        speed = 0;

    // Controllers
    function tabController(target, speed) {
        selector.find('.tabs__item').removeClass('tabs__item-active');
        selector.find('.tabs__item[data-tab="' + target + '"]').addClass('tabs__item-active');
        selector.find('.tab__content').removeClass('tab__content-active');
        selector.find('.tab__content' + target + '').addClass('tab__content-active');
    }

    // Init (default actions)
    tabController('#t1', 0);
    selector.find('.tab__content').css('transition', 'all ' + speed + 'ms ease-out');

    // Actions
    selector.find('[data-tab]').click(function() {
        var target = $(this).attr('data-tab');
        tabController(target, speed);
    });
}