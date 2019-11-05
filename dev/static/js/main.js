$(document).ready(function () {
    svg4everybody({});

    $('.sandwich').on('click', function(e) {
       $('.sandwich-menu').toggleClass('right-0');
    });

    $('.header-menu__item').on('click', function(e){
        e.preventDefault();
        var items = $('.header-menu__item');
        for (var i = 0; i < items.length; i++){
            if ( items[i] != $(this)[0] ) {
                items[i].classList.remove('active');
            }
        }
        $(this).toggleClass('active');
    })

    $('a[data-rel^=lightcase]').lightcase({
        "maxWidth": 414,
        "maxHeight": 621,
        swipe: true
    });

    // Parallax
    // init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    // build scenes
    if (document.getElementById('parallax1')) {
        new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
                        .addTo(controller);
    }

    if (document.getElementById('parallax2')) {
        new ScrollMagic.Scene({triggerElement: "#parallax2"})
                        .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
                        .addTo(controller);
    }
    
    if (document.getElementById('parallax3')) {
        new ScrollMagic.Scene({triggerElement: "#parallax3"})
                        .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
                        .addTo(controller);
    }
    
    if (document.getElementById('parallax4')) {
        new ScrollMagic.Scene({triggerElement: "#parallax4"})
                        .setTween("#parallax4 > div", {y: "80%", ease: Linear.easeNone})
                        .addTo(controller);
    }
    
    if (document.getElementById('parallax5')) {
        new ScrollMagic.Scene({triggerElement: "#parallax5"})
                        .setTween("#parallax5 > div", {y: "80%", ease: Linear.easeNone})
                        .addTo(controller);
    }
    
    if (document.getElementById('parallax6')) {
        new ScrollMagic.Scene({triggerElement: "#parallax6"})
                        .setTween("#parallax6 > div", {y: "80%", ease: Linear.easeNone})
                        .addTo(controller);
    }
    
    if (document.getElementById('parallax7')) {
        new ScrollMagic.Scene({triggerElement: "#parallax7"})
                        .setTween("#parallax7 > div", {y: "80%", ease: Linear.easeNone})
                        .addTo(controller);
    }

    //Form Ajax dropdown
    $('.models-form__dropdown').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.models-form').slideToggle(300);
    })

    //Swiper Slider
    
    //Thumbs
    var galleryThumbs = new Swiper('.single-thumbs-container', {
        spaceBetween: 10,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        // freeMode: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: '.single-thumbs__next',
            prevEl: '.single-thumbs__prev',
        },
        breakpoints: {
            320: {
                // slidesPerColumn: 2,
                slidesPerView: 3,
                spaceBetween: 8,
            },
            768: {
                // slidesPerColumn: 1,
                slidesPerView: 2,
                spaceBetween: 5
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10
            },
        }
    });

    //Big Photo
    var galleryTop = new Swiper('.single-photo', {
        spaceBetween: 0,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
          swiper: galleryThumbs,
        },
      });

    // Contacnt popup
    $('.feedback__button').on('click', function(e){
        e.preventDefault();
        $('.contacts-popup').addClass('active');
    })

    $('.contacts-popup-link').on('click', function(e) {
        e.preventDefault();
        $('.contacts-popup').removeClass('active');
    })

    // Shooting parallax
    new ScrollMagic.Scene({triggerElement: "#parallax1"})
    .setTween("#shooting-parallax > div", {y: "200%", ease: Linear.easeNone})
    .addTo(controller);

    //Shooting popup
    $('.catalog-block-order__button').on('click', function(e){
        e.preventDefault();
        // $('.shooting-popup-overlay').toggleClass('display-flex');
        $('.shooting-popup-overlay').show();
    })

    $('.popup__close').on('click', function(e){
        e.preventDefault();
        // $('.shooting-popup-overlay').toggleClass('display-none')
        $('.shooting-popup-overlay').hide();
    })

    // Team slider
    var galleryTeam = new Swiper('.team-sign-slider', {
        // slidesPerView: 6,
        loop: true,
        navigation: {
            nextEl: '.team-sign__next',
            prevEl: '.team-sign__prev',
        },
        breakpoints: {
            1024: { slidesPerView: 6 },
            768: { slidesPerView: 5 },
            560: { slidesPerView: 4 },
            320: { slidesPerView: 3 },
        },
    });

    // Reg Slider
    var regSliderThumbs = new Swiper('.reg-slider-thumbs', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.reg-slider__next',
            prevEl: '.reg-slider__prev',
        },
    });

    var regSlider = new Swiper('.reg-slider-main', {
        loop: true,
        thumbs: {
            swiper: regSliderThumbs,
          },
    });
});