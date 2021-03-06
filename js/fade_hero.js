// MAKE ELEMENTS FADE ON INITIAL WEBPAGE RENDER
$(document).ready(function() {
     $('.h1_and_p_wrapper').css("display","block").addClass('magic fadeIn');
     $('.h1_and_p_wrapper h1').css("display","block").addClass('animated fadeIn');
     $('.h1_and_p_wrapper p').css("display","block").addClass('animated fadeIn');
     $('.h1_and_p_wrapper div').css("display","inline-block").addClass('animated fadeIn');

     $('.h1_and_p_wrapper p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.h1_and_p_wrapper div').removeClass('animated fadeIn').addClass('animated bounce');
    });
     /*
     $('#hero_description h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $("#hero_wrapper").animate({
        'background-position-x': '1%',
        'background-position-y': '2%'
        }, 1000, 'linear');
    });
    */         
});


// MAKE HERO ELEMENTS FADE ON SCROLL
$(window).scroll(function(){
    var opacity = 1- ( $(window).scrollTop() / $('#hero_description').height());
    if (opacity>1) opacity=1;
    if (opacity<0) opacity=0;

    //$('#debug').html('ScrollTop:' + $(window).scrollTop() + '<br>pacity: ' + opacity);
    $('#hero_description').stop().fadeTo(0, opacity);    
});