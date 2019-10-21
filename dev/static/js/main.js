$(document).ready(function () {
    svg4everybody({});

    $('.sandwich').on('click', function(e) {
       $('.sandwich-menu').toggleClass('right-0');
    });
});