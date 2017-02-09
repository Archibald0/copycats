

//changements de lanques sur la bio
$(document).ready( function () {
    $('#button_lang a').on('click', function(e) {
        var lang = $(this).attr('href');
        var speed = 500;

        e.preventDefault();
        $(lang).next('.bio').fadeOut(speed);
        $(lang).prev('.bio').fadeOut(speed);
        $(lang).fadeIn(speed);

        $(this).next('#button_lang a').removeClass('clicked');
        $(this).prev('#button_lang a').removeClass('clicked');
        $(this).not('.clicked').addClass('clicked');

    });
});

//Déroulement infos #date
$(document).ready(function() {
    $('.tour_item').on('click', function(){
        var coord = $(this).find('.tour_focus');
        $('.tour_focus').not(coord).slideUp();
        coord.slideToggle();
    })
});
