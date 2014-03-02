

    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    $(document).keydown(function(e) {
      kkeys.push( e.keyCode );
      if ( kkeys.toString().indexOf( konami ) >= 0 ) {
        $(document).unbind('keydown',arguments.callee);
        // do something awesome
        $('#cities').attr('src', 'img/icons_flat/cities2.png');
        $('.konami_directions').css('opacity', '0.2');
        $('#twitter_secret').css('opacity', '1.0');
        $('#twitter_secret').css('display', 'block');
        $('#twitter_secret').addClass("animated bounceInUp");
      }

    });