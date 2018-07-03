/**
 * Created by elina on 6/29/2018.
 */
$(document).ready(function(){

    $(".slides__popular").owlCarousel({
        loop: true,
        margin: 3,
        nav: true,
        navContainer: '.popular__control',
        navClass: ['control__prev', 'control__next'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $(".slides__new-goods").owlCarousel({
        loop: true,
        nav: true,
        navContainer: '.new-goods__control',
        navClass: ['control__prev', 'control__next'],
        margin: 3,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $(".slides__t1").owlCarousel({
        loop: true,
        margin: 3,
        navContainer: '.rubric__control',
        navClass: ['control__prev', 'control__next'],
        nav: true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.slides__t2').owlCarousel({
        loop: true,
        margin: 3,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('.slides__t3').owlCarousel({
        loop: true,
        margin: 3,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.slides__t4').owlCarousel({
        loop: true,
        margin: 3,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $(".slides__t5").owlCarousel({
        loop: true,
        margin: 3,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $(".slides__t6").owlCarousel({
        loop: true,
        margin: 3,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $(".slides__t7").owlCarousel({
        loop: true,
        margin: 3,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


    var slider = {

    }
    slide: $(function() {
        $('.slides__gifts').owlCarousel({
            loop: true,
            nav: true,
            navContainer: '.gifts__control',
            navClass: ['control__prev', 'control__next'],
            margin: 3,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items: 4
                }
            }
        });
    });

});