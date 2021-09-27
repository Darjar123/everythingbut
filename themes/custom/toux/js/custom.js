

jQuery(document).ready(function(e) {     
    
    jQuery("#header_news").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        autoplaySpeed: 4000,
        autoplay: true,         
        navigation: false,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });    
    // Slideshow
    jQuery("#slishow_wrap12").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });
    // ----------AND----------------
    // Slideshow
    jQuery("#toux-slider-3").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });
    // ----------AND----------------
    // Slideshow
    jQuery("#toux-slider-4").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });
    // ----------AND----------------
    // Slideshow
    jQuery("#toux-slider-5").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });

        // Slideshow
    jQuery("#toux-slider-about").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });
    // ----------AND----------------
    // pproducts_deals_ lefft
    jQuery("#pproducts_deals").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // no1_blog_ left , testimoniol page2
    jQuery(".slider-left9 ").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // no1_producttaps1
    jQuery(".taps-slider1").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });
    // ----------AND----------------

    // no1_slider1_page2
    jQuery(".no1-slider-page1").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // MENU
    // jQuery(document).ready(function(jQuery){
        jQuery('#menu_offcanvas').No1Accordion({
            accordion: false,
            expand: false,
            btn_open: '<i class="fa fa-plus"></i>',
            btn_close: '<i class="fa fa-minus"></i>'
        });
        jQuery('#no1_mommenu .btn2.offcanvas').on('click', function(){
            if(jQuery('#menu_offcanvas').hasClass('active')){
                jQuery(this).find('.overlay').fadeOut(250);
                jQuery('#menu_offcanvas').removeClass('active');
                jQuery('body').removeClass('show-sidebar');
            } else {
                jQuery('#menu_offcanvas').addClass('active');
                jQuery(this).find('.overlay').fadeIn(250);
                jQuery('body').addClass('show-sidebar');
            }
        });
        if(jQuery('#menu_offcanvas').length) {
            jQuery('#no1_mommenu .btn2.rightsidebar').css('display', 'inline-block').on('click', function(){
                if(jQuery('#menu_offcanvas').hasClass('active')){
                    jQuery(this).find('.overlay').fadeOut(250);
                    jQuery('#menu_offcanvas').removeClass('active');
                    jQuery('body').removeClass('show-sidebar1');
                } else {
                    jQuery('#menu_offcanvas').addClass('active');
                    jQuery(this).find('.overlay').fadeIn(250);
                    jQuery('body').addClass('show-sidebar1');
                }
            });
        }
        if(jQuery('#no1_left').length) {
            jQuery('#no1_mommenu .btn2.leftsidebar').css('display', 'inline-block').on('click', function(){
                if(jQuery('#no1_left').hasClass('active')){
                    jQuery(this).find('.overlay').fadeOut(250);
                    jQuery('#no1_left').removeClass('active');
                    jQuery('body').removeClass('show-sidebar1');
                } else {
                    jQuery('#no1_left').addClass('active');
                    jQuery(this).find('.overlay').fadeIn();
                    jQuery('body').addClass('show-sidebar1');
                }
            });
        }
    // });
    // ----------AND----------------



    // ----------------no1_producttaps_wraps
    jQuery('#no1_producttaps1 .precar').on('click', function(){
        if(jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery( "#no1_producttaps1" ).removeClass( "active" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_producttaps1 .nav-tabs').stop(true, true).slideUp("1400");
        } else {
            jQuery(this).addClass('active');
            jQuery( "#no1_producttaps1" ).addClass( "test" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_producttaps1 .nav-tabs').stop(true, true).slideDown("1400");
        }
    });
    // ----------AND----------------

    // ----------------no1_producttaps_wraps
    jQuery('#no1_slider1_page2 .precar').on('click', function(){
        if(jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery( "#no1_slider1_page2" ).removeClass( "active" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_slider1_page2 .nav-tabs').stop(true, true).slideUp("1400");
        } else {
            jQuery(this).addClass('active');
            jQuery( "#no1_slider1_page2" ).addClass( "test" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_slider1_page2 .nav-tabs').stop(true, true).slideDown("1400");
        }
    });
    // ----------AND----------------

    // ----------------no1_producttaps_wraps
    jQuery('#no1_slider2_page2 .precar').on('click', function(){
        if(jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery( "#no1_slider2_page2" ).removeClass( "active" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_slider2_page2 .nav-tabs').stop(true, true).slideUp("1400");
        } else {
            jQuery(this).addClass('active');
            jQuery( "#no1_slider2_page2" ).addClass( "test" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_slider2_page2 .nav-tabs').stop(true, true).slideDown("1400");
        }
    });
    // ----------AND----------------

    // ----------------no1_producttaps_wraps
    jQuery('#no1_slider3_page2 .precar').on('click', function(){
        if(jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery( "#no1_slider3_page2" ).removeClass( "active" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_slider3_page2 .nav-tabs').stop(true, true).slideUp("1400");
        } else {
            jQuery(this).addClass('active');
            jQuery( "#no1_slider3_page2" ).addClass( "test" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('#no1_slider3_page2 .nav-tabs').stop(true, true).slideDown("1400");
        }
    });
    // ----------AND----------------

    // ----------------description
    jQuery('#no1_description .detail-none').on('click', function(){
        if(jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery( ".description" ).removeClass( "active" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('.description .nav-tabs').stop(true, true).slideUp("1400");
        } else {
            jQuery(this).addClass('active');
            jQuery( ".description" ).addClass( "test" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('.description .nav-tabs').stop(true, true).slideDown("1400");
        }
    });
    // ----------AND----------------

    //-----------suggest collection
    jQuery('#no1_suggest12 .fa').on('click', function(){
        if(jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery( ".no1_suggest" ).removeClass( "active" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('.no1_suggest .suggest-content').stop(true, true).slideUp("1400");
        } else {
            jQuery(this).addClass('active');
            jQuery( ".no1_suggest" ).addClass( "test" );
            jQuery(this).find('[class*="fa-caret-"]').removeClass('fa-align-justify').addClass('fa-align-justify');
            jQuery('.no1_suggest .suggest-content').stop(true, true).slideDown("1400");
        }
    });
    // ----------AND----------------

    // Slideshow
    jQuery("#slider123").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: false,
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });
    // ----------AND----------------

     // blog
    jQuery("#latestblog132").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        // singleItem: true,
        loop: true
    });
    // ----------AND----------------

     // no1-products-list
    jQuery("#products_small").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            530:{
                items:2
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

      // block-bestsaler
    jQuery("#products_slider12").owlCarousel({
        responsive:{
             0:{
                items:1
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // parner
    jQuery("#partners_slider1").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            600:{
                items:2
            },
            980:{
                items:4
            },
            1000:{
                items:4
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // categories
    jQuery(".featured-slider").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // product_index
    jQuery("#product_index, #product_index1, #product_index2").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // related_upsell
    jQuery("#related_upsell").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------

    // related_related
    jQuery("#related_upsell1").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        },
        navigation: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
    });
    // ----------AND----------------
    // product bestseller home3

    // no1-products-list
    jQuery("#products_bestseller").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            530:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        },
        navigation: true,
        nav: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        margin: 30,
        navText: "-",
    });
    // search mobile
    jQuery('#form-search-mobile').hide();
    jQuery( ".show-top-search" ).click(function() {
      jQuery('#form-search-mobile').slideToggle('slow');
    });

    /* side nav categories */
    // if (jQuery('.cate .fa')[0]) {
        jQuery('.cate .fa').on("click", function() {
            jQuery(this).parent().find('> i').toggleClass('fa-plus active');
            jQuery(this).parent().find('> a').addClass('active');
            jQuery(this).parent().find('> i').toggleClass('fa-minus');
            jQuery(this).parent().find('> ul').slideToggle();
        });
    // }

    // hover cate

    jQuery('#products-list .item').hover(
      function() {
        jQuery( this ).find('.item-inner').addClass('active-li');
      }, function() {
        jQuery( this ).find('.item-inner').removeClass('active-li');
      }
    );
    jQuery(".qty").append('<div class="inc button">+</div><div class="dec button">-</div>');
    jQuery(".qty .button").on("click", function() {

      var jQuerybutton = jQuery(this);
      var oldValue = jQuerybutton.parent().find("input").val();

      if (jQuerybutton.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
       // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }

      jQuerybutton.parent().find("input").val(newVal);
      var id = jQuerybutton.attr("id");
        jQuery.ajax({
          type: "POST",
          url: "dosomething.php?id=" + id + "&newvalue=" + newVal,
          success: function() {
            jQuerybutton.parent().find("input").val(newVal);
          }
        });
    });
});


//home1.html

jQuery(document).ready(function(){
    //cout down                 
    jQuery('.getting-started').countdown('2017/10/10', function(event) {
        jQuery(this).html(event.strftime('<ul><li class="days">%D <span>Days</span></li><li>%H <span>Hours</span></li><li>%M <span>Min</span></li><li>%S <span>Sec</span></li></ul> '));                                               
    });    
     jQuery('.slide-about').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
       prevArrow: false,
        nextArrow: false
    });

     // slider thumbail
      jQuery('.slider-for-detail').slick({
        slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav-detail'
        });
        jQuery('.slider-nav-detail').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for-detail',
          dots: true,
          centerMode: true,
          focusOnSelect: true
        });
    // ----------AND----------------
    // //slider main
    jQuery('#slider-home').slick({
        dots:true,
        cssEase: 'ease',
        infinite: true,
        speed: 500,
        autoplaySpeed: 4000,
        autoplay: true,        
        //fade: true,
        prevArrow: '<div class="slick-prev"><div class="btn-inner">Pre</div></div>',
        nextArrow: '<div class="slick-next"><div class="btn-inner">Next</div></div>',           
    })

    //Slider products slick
     jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        centerPadding: 15,
        focusOnSelect: true,
        prevArrow: '<div class="slick-prev"><div class="btn-inner">Pre</div></div>',
        nextArrow: '<div class="slick-next"><div class="btn-inner">Next</div></div>', 
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
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]                 
    });           

 });          

jQuery(document).ready(function(){
    jQuery("#feauture_product_inner").owlCarousel({
        responsive:{
            0:{
                items:1
            }
        },
        navigation: true,
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });    

    jQuery('.mycart .tongle').on(' click tap', function() {
        jQuery(this).parent().find('.block-content').slideToggle('slow');
    })
});
function init(){
    //data images
    if(jQuery('.data-img').length){
        jQuery('.data-img').dataImg({
          sml: 767,
          med: 1024,
          lrg: 1200,
          resize: true
        });  
    }
}
function initSlider(){
    jQuery('.references').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
}
jQuery(document).on('ready', function () {
    init();
    initSlider();
});

