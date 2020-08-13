jQuery(document).ready(function($){

   $(function(){
      $('.nav-buttons').on('click', function(){
        event.preventDefault();
        $('#navbar-main').fadeToggle();
        $('.nav-buttons').toggleClass('open');       
      });
      // if($('.menu-wrap').css('display') == 'block'){
      //   $('.fixed-elements nav ul li').on('click', function(){
      //     $('.menu-wrap').fadeOut()          ;
      //     $('.nav-buttons').removeClass('open');
      //   });}
    });

   $(function(){
      $('.lang-switch').on('click', function(){
        event.preventDefault();
        $('.lang-list').fadeToggle();
      });
    });

  function respSlide(){
    if($(window).width() <= 700){
      $('.work-steps-wrapper .swiper-slide').removeClass('desktop-width');
    }
    else{
      $('.work-steps-wrapper .swiper-slide').addClass('desktop-width');
    }
  }
  respSlide();
  $(window).resize(function(){respSlide();});

  function appendNav(){
    if($(window).width() < 1381){
      $('#navbar-main').appendTo('.header');
      $('.lang-list').appendTo('.menu-nav-wrap');
    }
    else
    if($(window).width() > 1380){
      $('#navbar-main').appendTo('.fixed-elements');
      $('.lang-list').appendTo('.lang-panel');
    }
  }
  appendNav();
  $(window).resize(function(){appendNav();});

  function appendTel(){
    if($(window).width() < 451){
      $('.phone-menu').appendTo('#navbar-main');
    }
    else
    if($(window).width() > 451){
      $('.phone-menu').appendTo('.header');
    }
  }
  appendTel();
  $(window).resize(function(){appendTel();});


  var swiper = new Swiper('.work-steps-wrapper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 150,
      pagination: {
        el: '.steps-way',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      breakpoints: {
        1650:{
          spaceBetween: 100,
        },
        1000: {
          spaceBetween: 50,
        },
        700: {
          slidesPerView: '1',
          spaceBetween: 20,
          autoHeight: true,
        }
      },
    });

  swiper.on('slideChange', function(){
    $('.steps-way .swiper-pagination-bullet').slice(0,this.activeIndex).addClass('swiper-pagination-bullet-active')
  })

 $('.benefit-title').on('click',function(){
  if($(this).siblings('.benefit-content').css('display') == 'none'){
    $('.benefit-title').removeClass('benefit-open');
    $('.benefit-content').slideUp();
    $(this).addClass('benefit-open');
    $(this).siblings('.benefit-content').slideDown();}
  else  
  if($(this).siblings('.benefit-content').css('display') == 'block'){
    $('.benefit-title').removeClass('benefit-open');
    $('.benefit-content').slideUp();
  }});

  var swiper = new Swiper('.feedback-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.feedback-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       breakpoints: {
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView:1,
        }
      }
    });

  $("#menu, #callback-btn-anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

  $(function(){
    $('.feedback-img').height($('.feedback-img').width()*0.6);

    $(window).resize(function(){
      $('.feedback-img').height($('.feedback-img').width()*0.6);
    });
  });

  $(function(){
    $('.steps-way').find('.swiper-pagination-bullet-active').prevAll().addClass('block__item--squared');
  });

  $("#tel-callback").mask("+38 (999) 999-99-99");
  $("#tel-request").mask("+38 (999) 999-99-99");
  //

  $('.video-btn').click(function(event) {
      var $this = $(this);
      var $iframe = $("<iframe>").attr("src", $this.data("link"));
      $iframe.attr('allowfullscreen', 1);
      $(".modal-body").empty();
      $(".modal-body").append($iframe);
    });

  //

  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.calc-section').on('inview', function(event, isInView) {
      if (isInView) {
        $('.result-table').addClass('result-table-fixed');
      } else {
        $('.result-table').removeClass('result-table-fixed');
      }
    });
  };

$('#slider-year').slider(
  {
    min: 2000,
    max: 2019,
    range: 'true',
    values: [2012, 2015],
    slide : function( e, ui ) {
        ui.handle.innerHTML = '<span data-value="'+ ui.value +'"  class="slider-range-value">' +  ui.value + '</span>';
    },
    create: function( event, ui ) {
        var ui_sl_handles = $(this).find('.ui-slider-handle');
        ui_sl_handles[0].innerHTML = '<span data-value="2012" class="slider-range-value min-val">2012</span>';
        ui_sl_handles[1].innerHTML = '<span data-value="2015" class="slider-range-value max-val">2015</span>';
        $('#in-year').attr('value', '2012-2015');
    },
    change: function( event, ui ) {
      $('#in-year').attr('value', ui.values[0]+'-'+ui.values[1]);
    }
  }
);

$('#slider-budget').slider(
  {
    min: 5000,
    max: 17500,
    step:100,
    range: 'true',
    values: [8000, 15000],
    slide : function( e, ui ) {
        ui.handle.innerHTML = '<span data-value="' + ui.value +  '"  class="slider-range-value">' +  ui.value + '$' + '</span>';
        
    },
    create: function( event, ui ) {
        var ui_sl_handles = $(this).find('.ui-slider-handle');
        ui_sl_handles[0].innerHTML = '<span data-value="8000" class="slider-range-value min-val">8000$</span>';
        ui_sl_handles[1].innerHTML = '<span data-value="15000" class="slider-range-value max-val">15000$</span>';
        $('#in-budget').attr('value', '8000-15000');
    },
    change: function( event, ui ) {
      $('#in-budget').attr('value', ui.values[0]+'-'+ui.values[1]);
    }
  }
);

$('#slider-year-2').slider(
  {
    min: 2000,
    max: 2019,
    range: 'min',
    value:2014,
    slide : function( e, ui ) {
        ui.handle.innerHTML = '<span data-value="'+ ui.value +'"  class="slider-range-value">' +  ui.value + '</span>';
    },
    create: function( event, ui ) {
        var ui_sl_handles = $(this).find('.ui-slider-handle');
        ui_sl_handles[0].innerHTML = '<span data-value="2014" class="slider-range-value">2014</span>';
    },
    change: function( event, ui ) {
      calculateCarTax()
    }
  }
);

$('#slider-volume-2').slider(
  {
    min: 1.0,
    max: 6.2,
    range: 'min',
    value:3.0,
    step: 0.1,
    slide : function( e, ui ) {
        var engine_type = $('#engine').val();
        var etl = (engine_type == 4) ? 'кВт' : 'л';
        var eng_coef = (engine_type == 4) ? 1 : 1000;
        ui.handle.innerHTML = '<span  data-value="' + ui.value * eng_coef +  '"  class="slider-range-value">' +  ui.value + etl + '</span>';
    },
    create: function( event, ui ) {
        var ui_sl_handles = $(this).find('.ui-slider-handle');
        ui_sl_handles[0].innerHTML = '<span  data-value="3000"  class="slider-range-value">3.0л</span>';
    },
    change: function( event, ui ) {
      calculateCarTax();
    }
  }
);

$('#cost-car').keyup(function(){
  calculateCarTax();  
})

$('#engine').change(function(){
  calculateCarTax();  
})

$('#feediscount').change(function(){
  calculateCarTax();  
})

calculateCarTax();

function calculateCarTax() {
    var price = parseInt($('#cost-car').val());
    var year = parseInt($('#slider-year-2 .slider-range-value').data('value'));
    var engine_type = parseInt($('#engine').val());
    var engcpc = parseInt($('#slider-volume-2 .slider-range-value').data('value'));
    var engine_capacity = (engine_type !== 4) ? (engcpc / 1000) : engcpc ;
    var discount = $('#feediscount:checked').length;
    var euro_coef = (typeof curr_coef !== 'undefined' && !isNaN(curr_coef)) ? curr_coef : 1.2;

    // console.log(price);
    // console.log(year);
    // console.log(engine_type);
    // console.log(engcpc);
    // console.log(engine_capacity);
    // console.log(discount);
    // console.log(euro_coef);
    //var euro_coef =  1.2;

    var coef = 50 * euro_coef;

    var today = new Date();
    var yyyy = ((today.getFullYear() - year) <= 1) ? 1 : (today.getFullYear() - year);


    if (engine_type === 2) {
        coef = 75 * euro_coef;
    }

    if (engine_capacity > 3 && engine_type === 1) {
        coef = 2 * coef;
    }
    if (engine_capacity > 3.5 && engine_type === 2) {
        coef = 2 * coef;
    }

    var excise = Math.round(coef * yyyy * engine_capacity);
    if (engine_type === 3) {
        excise = 100 * euro_coef;
    }
    if (engine_type === 4) {
        excise = euro_coef * engine_capacity;
    }

/*    if (discount && engine_type !== 3 && engine_type !== 4) {*/
    if (discount) {
        excise = excise / 2;
    }

    excise = Math.round(excise,0);
    var toll = Math.round(price * 0.1, 0);
    var vat = Math.round((price + excise + toll) * 0.2, 0);

    if (engine_type == 4) {
        toll = 0; vat = 0;
    }


    $("#tax").html("&nbsp;$&nbsp;" + toll);
    $("#excise").html("&nbsp;$&nbsp;" + excise);
    $("#vat").html("&nbsp;$&nbsp;" + vat);
    $("#price").html("&nbsp;$&nbsp;" + ( excise + toll + vat));
    $("#total-price").html("&nbsp;$&nbsp;" + ( price + excise + toll + vat));
}

});
//jQuery
