$(document).ready(function () {
    $('.main-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        arrows: true,
        speed: 1300,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });
});

$(document).ready(function () {
    $('.gallery-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        variableWidth: true,
        arrows: true,
        speed: 1300,
        nextArrow: '<button type="button" class="gallery-slider-next gallery-slider-btn"></button>',
        prevArrow: '<button type="button" class="gallery-slider-prev gallery-slider-btn"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                speed: 1000,
                slidesToShow: 1
              }
            },
        ]
    });
});