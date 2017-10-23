$(function() {
  /*
  $('.testimotional_response').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '20px',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.testimotional_comments'
  });

  $('.testimotional_comments').slick({
    arrows: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  });
  */
  //Animation FadeIn

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        $(".mainlogo").css('visibility', 'hidden');
        $(".header_navbar").addClass('header_navbar-scroll');
      } else {
        $(".mainlogo").css('visibility', 'visible');
        $(".header_navbar").removeClass('header_navbar-scroll');
    }
  });

  /*
  $(window).scroll(function() {
    $(".animation").each(function(){
      var pos = $(this).offset().top;
      //var winTop = $(window).scrollTop();
      var winTop = $(window).scrollTop();
      console.log('pos:' + pos);
      console.log('winTop:' + winTop);
      if (pos > (winTop)/2) {
        //alert('pos' + pos + 'winTop' + winTop);
        $(this).addClass("animated fadeInUpBig");
        //$(".fadeUp").removeClass("fadeUp").addClass("animated fadeInUpBig");
        //$(".fadeDown").removeClass("fadeDown").addClass("animated fadeInDownBig");
      }
    });
  });
  */



});
