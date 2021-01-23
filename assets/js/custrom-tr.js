$(document).ready(function() {
	new WOW().init();
  $('.footer h3').click(function(event) {
    if ($('.row').hasClass('use_mobi')) {
      $('.footer h3').not($(this)).removeClass('active');
      $('.footer .menu_footer').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.main_menu>li').click(function(event) {
    if ($('.main_menu').hasClass('use_mobi')) {
      $('.use_mobi>li').not($(this)).removeClass('active');
    }
    $(this).toggleClass('active');
  });

  $('.icon_bar_mobi').click(function(){
    $('.element_menu').toggle();
  });

   $('.close_btn').click(function(){
    $('.element_menu').toggle();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.section_header').addClass('fixed');
    } else {
      $('.section_header').removeClass('fixed');
    }
  });

  $('.element_certification').slick({
    dots: false,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.element_suppliers').slick({
    dots: false,
    slidesToShow: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  /* 23 / 01 / 2021 create 13_chitietsp.html javascript */
  $('.slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider_nav'
  });
  $('.slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider_for',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
  });
  
  $('.element_product_slider_detail').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });
    
});


/* 23 / 01 / 2021 create 13_chitietsp.html javascript */
function executeAutomaticVisibility(name) {
  $("[name=" + name + "]:checked").each(function() {
    $("[showIfIdChecked=" + this.id + "]").show();
  });
  $("[name=" + name + "]:not(:checked)").each(function() {
    $("[showIfIdChecked=" + this.id + "]").hide();
  });
}

$(document).ready(function() {
  triggers = $("[showIfIdChecked]")
    .map(function() {
      return $("#" + $(this).attr("showIfIdChecked")).get()
    })
  $.unique(triggers);
  triggers.each(function() {
    executeAutomaticVisibility(this.name);
    $(this).change(function() {
      executeAutomaticVisibility(this.name);
    });
  });
});
