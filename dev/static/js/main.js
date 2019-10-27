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
});