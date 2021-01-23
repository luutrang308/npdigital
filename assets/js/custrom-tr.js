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
    
});


/**/
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
