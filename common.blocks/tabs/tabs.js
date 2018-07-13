/**
 * Created by elina on 6/30/2018.
 */

/**
 * tab-rubricS CONTROL FOR MAIN PAGE
 * @type {*|jQuery|HTMLElement}
 */
function tabController() {
    var tabRubric = $('.tabs-rubric__link');
    var tabContentRubric = $('.tab-rubric__content');
    var i = 0;
    var j = 0;

    tabRubric.each(function () {
        i++;
        $(this).attr('href', 't'+i);
    });
    tabContentRubric.each(function () {
        j++;
        $(this).attr('id', 't'+j);
    });
    var $this, tabGroup, others, target, controls;

    $('.tab-rubric > .tab-rubric__content').removeClass('tab-rubric__content-active');
    $('.tab-rubric > .tab-rubric__content:first-of-type').addClass('tab-rubric__content-active');
    $('.tab-slider__control > .control__item:first-of-type').addClass('control__item-active');

    $('.tabs-rubric__items a').click(function(e){
        e.preventDefault();
        $this = $(this);
        others = $this.closest('li').siblings().children('a');
        target = $this.attr('href');
        tabGroup = '#'+$this.parents('.tabs-rubric__items').data('tabgroup');
        content = '#'+target;
        controls = target;
        console.log(tabGroup);

        others.removeClass('tabs-rubric__item-active');
        $this.addClass('tabs-rubric__item-active');

        $(tabGroup).children('div').removeClass('tab-rubric__content-active');
        $('.slider__control').children('ul').removeClass('control__item-active');

        $(content).addClass('tab-rubric__content-active');
        $('.slider__control').find('.control__item[data-control="' + controls + '"]').addClass('control__item-active');

    });
}