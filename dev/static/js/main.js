$(document).ready(function () {
    svg4everybody({});

    $('.sandwich').on('click', function(e) {
       $('.sandwich-menu').toggleClass('right-0');
    });

    $('.header-menu__item').on('click', function(e){
        var items = $('.header-menu__item');
        var currentItem = $(this);
        for (var i = 0; i < items.length; i++){
            if ( items[i] != currentItem ) {
                console.log(items[i]);
                // items[i].removeClass('active');
            }
        }
        // $('.header-menu__item').removeClass('active');
        $(this).toggleClass('active');
    })
});