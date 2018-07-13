/**SLIDER */
$('.banner__slides').slick({
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slick-dots').find('button').text('');

$('.slides__new-goods').slick({
    arrows: true,
    speed: 500,
    mobileFirst: true,
    prevArrow: $('.new-goods__prev'),
    nextArrow: $('.new-goods__next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
});

function rubricGenerationId() {
    var i = 0;

    $('.rubric__control').each(function () {
        i++;
        $(this).attr('id', 'control' + i);
        $(this).attr('data-control', 't' + i);
    });
}

function slickSliderController (sliderClass, prevClass, nextClass, navArrows, numbers, variableWidth) {
    this.prevClass = prevClass;
    this.nextClass = nextClass;
    this.slickSlider = function() {
        $(sliderClass).slick({
            navArrows: navArrows,
            speed: 300,
            mobileFirst: true,
            prevArrow: $(this.prevClass),
            nextArrow: $(this.nextClass),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: numbers[0],
                        slidesToScroll: numbers[2]
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: numbers[1],
                        slidesToScroll: numbers[2]
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: numbers[2],
                        slidesToScroll: numbers[3]
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: numbers[3],
                        slidesToScroll: numbers[3]
                    }
                },
                {
                    breakpoint: 180,
                    settings: {
                        slidesToShow: numbers[3],
                        slidesToScroll: numbers[3]
                    }
                }
            ],
            variableWidth: variableWidth
        });
    }

}
var sliderTab1 = new slickSliderController('.slides__t1', '#control1 .rubric__prev', '#control1 .rubric__next', true, [4, 3, 2, 1], true);
var sliderTab2 = new slickSliderController('.slides__t2', '#control2 .rubric__prev', '#control2 .rubric__next', true, [4, 3, 2, 1], true);
var sliderTab3 = new slickSliderController('.slides__t3', '#control3 .rubric__prev', '#control3 .rubric__next', true, [4, 3, 2, 1], true);
var sliderTab4 = new slickSliderController('.slides__t4', '#control4 .rubric__prev', '#control4 .rubric__next', true, [4, 3, 2, 1], true);
var sliderTab5 = new slickSliderController('.slides__t5', '#control5 .rubric__prev', '#control5 .rubric__next', true, [4, 3, 2, 1], true);
var sliderTab6 = new slickSliderController('.slides__t6', '#control6 .rubric__prev', '#control6 .rubric__next', true, [4, 3, 2, 1], true);
var sliderTab7 = new slickSliderController('.slides__t7', '#control7 .rubric__prev', '#control7 .rubric__next', true, [4, 3, 2, 1], true);

var sliderRecommended = new slickSliderController('.slides__recommended', '.recommended__prev', '.recommended__next', true, [5, 4, 2, 1], false);
var sliderPopularMap = new slickSliderController('.slides__popular-product-map', '.product-map__prev', '.product-map__next', true, [5, 4, 2, 1], false);

var sliderGifts = new slickSliderController('.slides__gifts', '.gifts__prev', '.gifts__next', true, [4, 3, 2, 1], false);
var sliderPopular = new slickSliderController('.slides__popular', '.popular__prev', '.popular__next', true, [4, 3, 2, 1], false);