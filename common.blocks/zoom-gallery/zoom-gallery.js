/**
 * Created by elina on 7/6/2018.
 */
$('.zoom-gallery').slick({
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ([
        '.zoom-gallery-mini',
        '.zoom-gallery-zoom__wrapper'
    ]),
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: true
            }
        },
        {
            breakpoint: 320,
            settings: {
                arrows: true
            }
        }
    ]
});
$('.zoom-gallery-mini').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.zoom-gallery',
    mobileFirst: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title');
        }
    }
});