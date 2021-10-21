$(document).ready(function(){
    $('.slider1').slick({
        arrows:false,
        dots:false,
        slidesToShow:4,
        autoplay:false,
        speed:false,
        autoplaySpeed:false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.slider2').slick({
        arrows:false,
        dots:true,
        slidesToShow:2,
        autoplay:true,
        speed:1000,
        autoplaySpeed:10000,
        responsive:[
            {
                breakpoint: 960,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.slider3').slick({
        arrows:false,
        dots:false,
        slidesToShow:4,
        autoplay:false,
        speed:false,
        autoplaySpeed:false,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 622,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});