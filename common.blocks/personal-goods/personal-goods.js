/**
 * TABS CONTROL FOR PERSONAL ROOM
 * @type {*|jQuery|HTMLElement}
 */

function tabPersonalRoom() {
    var i = 1;
    var j = 1;
    var personalRoomTab = $('.tabs-personal-good__item');
    var personalRoomTabContent = $('.tab-personal-good__content');

    personalRoomTab.each(function() {
        $(this).attr('href', 'pr'+i);
        i++;
    });
    personalRoomTabContent.each(function() {
        $(this).attr('id', 'pr'+j);
        j++;
    });
    var $this, tabGroup, others, target, controls;

    $('.tab-personal-good > .tab-personal-good__content').removeClass('tab-personal-good__content-active');
    $('.tab-personal-good > .tab-personal-good__content:first-of-type').addClass('tab-personal-good__content-active');

    $('.tabs-personal-good li').click(function(e){
        e.preventDefault();
        $this = $(this);
        others = $this.closest('li').siblings();
        target = $this.attr('href');
        tabGroup = '#'+$this.parents('.tabs-personal-good').data('persgroup');
        content = '#'+target;
        console.log(tabGroup);

        others.removeClass('tabs-personal-good__item-active');
        $this.addClass('tabs-personal-good__item-active');

        $(tabGroup).children('div').removeClass('tab-personal-good__content-active');
        $(content).addClass('tab-personal-good__content-active');

    });
}
