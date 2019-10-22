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
});