$('.hero-slider').owlCarousel({

items:1,

loop:true,

nav:true,

dots:false,

autoplay:false,

autoplayTimeout:5000,

smartSpeed:1000,

navText:[
'<i class="fa-solid fa-arrow-left"></i>',
'<i class="fa-solid fa-arrow-right"></i>'
]

});

$('.property-slider').owlCarousel({

    loop:true,

    margin:20,

    nav:true,

    dots:true,

    autoplay:false,

    autoplayTimeout:3000,

    smartSpeed:800,

    navText:[
        '<span>&larr;</span>',
        '<span>&rarr;</span>'
    ],

    responsive:{

        0:{
            items:1
        },

        768:{
            items:2
        },

        992:{
            items:3
        }

    }

});

$('.client-feedback-slider').owlCarousel({

    loop:true,

    margin:30,

    nav:false,

    dots:true,

    autoplay:true,

    autoplayTimeout:3000,

    autoplayHoverPause:true,

    smartSpeed:800,

    responsive:{

        0:{
            items:1
        },

        768:{
            items:2
        },

        992:{
            items:3
        }

    }

});

$('.feedback-slider').owlCarousel({

    loop:true,
    center:true,
    margin:35,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:800,

    navText:[

        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'

    ],

    responsive:{

        0:{
            items:1
        },

        768:{
            items:2
        },

        1200:{
            items:3
        }

    }

});

$('.blog-slider').owlCarousel({

    loop:true,
    margin:35,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:800,

    navText:[

'<i class="fa-solid fa-arrow-left"></i>',
'<i class="fa-solid fa-arrow-right"></i>'

    ],

    responsive:{

        0:{
            items:1
        },

        768:{
            items:2
        },

        1200:{
            items:3
        }

    }

});