$(document).ready(function () {
    svg4everybody({});

    $('.sandwich').on('click', function(e) {
       $('.sandwich-menu').toggleClass('right-0');
    });

    $('.header-menu__item').on('click', function(e){
        if($(this).find('.dropdown').length != 0){
            var items = $('.header-menu__item');
            if (e.target.className != 'dropdown' && e.target.className != 'dropdown__item') {
                e.preventDefault();
                for (var i = 0; i < items.length; i++){
                    if ( items[i] != $(this)[0]) { items[i].classList.remove('active'); }
                }
                $(this).toggleClass('active');
            }
        }
    })

    $('a[data-rel^=lightcase]').lightcase({
        "maxWidth": 414,
        "maxHeight": 621,
        swipe: true
    });

    //Phone popup
    $('.header-social-phone').on('click', function(e){
        e.preventDefault();
        $('.popup-phone').toggleClass('display-block');
    })

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
        loop: true,
        slidesPerView: 3,
        // loopedSlides: 5, //looped slides should be the same
        freeMode: true,
        // watchSlidesVisibility: true,
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
                slidesPerView: 2,
                spaceBetween: 5,
                // slidesPerColumn: 1,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10,
            //   slidesPerColumn: 1,
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
    if (document.getElementById('shooting-parallax')) {
        new ScrollMagic.Scene()
            .setTween("#shooting-parallax > div", {y: "200%", ease: Linear.easeNone})
            .addTo(controller);
    }

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
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.reg-slider__next',
            prevEl: '.reg-slider__prev',
        },
        breakpoints: {
            560: { slidesPerView: 2, slidesPerColumn: 2, },
            320: { slidesPerView: 1, slidesPerColumn: 2, },
        },
    });

    var regSlider = new Swiper('.reg-slider-main', {
        loop: true,
        thumbs: {
            swiper: regSliderThumbs,
          },
    });

    // Personal Area
    // Vertikal tabs
    $('.cabinet-sidebar-menu').delegate('li:not(.check)', 'click', function(){
        $(this).addClass('check').siblings().removeClass('check')
        .parents('.cabinet-container').find('.cabinet-tab-content')
        .hide().eq( $(this).index() ).fadeIn(170);
    });

    // Filter
    $('.cabinet-filter-title').on('click', function(e){
        e.preventDefault();
        $('.cabinet-filter-title-arrow__icon_down, .cabinet-filter-title-arrow__icon_up').toggleClass('display-block')
        $('.cabinet-filter-wrapper').toggleClass('display-flex');
    })

    // Modal signup
    $('.header-login').on('click', function(e){
        e.preventDefault();
        $('.modal-signup-overlay').addClass('display-flex');
    })

    $('.modal-signup__close').on('click', function(e){
        e.preventDefault();
        $('.modal-signup-overlay').removeClass('display-flex');
    })

    $('#modal-reg').on('click', function(e){
        e.preventDefault();
        $('.modal-signup-window_login').removeClass('display-flex');
        $('.modal-signup-window_reg').addClass('display-flex');
    })

    $('#modal-login').on('click', function(e){
        e.preventDefault();
        $('.modal-signup-window_reg').removeClass('display-flex');
        $('.modal-signup-window_login').addClass('display-flex');
    })

    // Personal area link menu
    $('.cabinet-tab__menu').on('click', function(e){
        e.preventDefault();
        $('.cabinet-sidebar').addClass('display-flex');
    })

    $('.cabinet-sidebar__menu').on('click', function(e){
        e.preventDefault();
        $('.cabinet-sidebar').removeClass('display-flex');
    })

    // Video details
    $('.video-details__button').on('click', function(e){
        e.preventDefault();
        $(this).next('.video-details-content').toggleClass('display-flex');
    })
});