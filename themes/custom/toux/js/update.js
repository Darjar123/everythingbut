jQuery(document).ready(function($) {
    if ($('.fix_fullwidth_shop').length == 0) {
    var w_window = $(window).width();            
    var r_container = $('.container>.row').width();
    var p_left = (w_window - r_container) / 2;
    if ($('#top_main .banner_top_product').length > 0) {
        //alert('here');
        var w_banner_top_product = p_left + $('.panel_left_sliderbar').width();
        var w_left = (w_banner_top_product / w_window) * 100;
        $('#top_main .banner_top_product').css({
            width: w_left + "%"
        });
        $('#top_main .banner_right_product ').css({
            'width': (100 - w_left) + "%"
        });
        $('.shop_main_content .border_full_right').css({
            'right': '-' + p_left + 'px',
            'width': parseInt(p_left + 15) + 'px'
        });
    }
    if (w_window < 990) {
        $('#top_main .banner_top_product').removeProp('width', '');
        $('#top_main .banner_right_product ').removeAttr('style');
        //$('.shop_main_content .border_full_right').removeAttr('style');
        $('.shop_main_content .border_full_left').css({
            'left': '-' + p_left + 'px',
            'width': parseInt(p_left + 15) + 'px'
        });
    }
}
});
jQuery(document).ready(function($) {
	$(' input[type=search]').attr('placeholder', 'Search');
	$('.comment-form .form-item-name input[type = text]').attr('placeholder', 'Name (*)');
	$('.comment-form .form-item-subject-0-value input[type = text]').attr('placeholder', 'Subject');
	$('.comment-form .form-item-field-email-0-value input[type = email]').attr('placeholder', 'Email (*)');
	$('.comment-form input[type = text]').attr('class', 'form-control');
	$('.comment-form input[type = email]').attr('class', 'form-control');
	$('.comment-form textarea').attr('placeholder', 'Comment');	
	$('.comment-form textarea').attr('class', 'form-control');
	$('.comment-form input[type = submit]').attr('class', 'btn');
	$('.box_fmail input[type = email]').attr('class', 'input_form');	
	$('.box_fmail input[type = email]').attr('placeholder', 'Enter Your Email');
	$('.contact-form input[type = text]').attr('class', 'form-control');
	$('.contact-form input[type = email]').attr('class', 'form-control');
	$('.contact-form .form-item-name input[type = text]').attr('placeholder', 'Name (*)');
	$('.contact-form .form-item-subject-0-value input[type = text]').attr('placeholder', 'Subject');
	$('.contact-form .form-item-mail input[type = email]').attr('placeholder', 'Email (*)');
	$('.contact-form textarea').attr('class', 'form-control');
	$('.contact-form input[type = submit]').attr('class', 'btn');	
	$('.contact-form textarea').attr('placeholder', 'Comment');
	$('.class_cart input[type = submit]').attr('class', 'btn btn-default');
	$('.product_featured_item .class_featured:first-child').attr('class', 'col-md-6 product_featured_large text-center');
	$('.uc-product-add-to-cart-form input[type = submit]').attr('class', 'btn-cart');
    $('.box_cat .uc-product-add-to-cart-form input[type = submit]').attr('class', 'btn btn-secondary');
    $('.logo2 .no1_header2 h1').removeClass('responsv col-lg-2 col-sm-3 col-xs-3 no1-logo col-md-2');
    $('.class_last:last-child').attr('class', 'item col-lg-2d4 col-md-3 col-sm-4 col-xs-6 col-phone-12 visible-lg');
    $('.submenu-2 >ul').wrap('<div class="wrap_submenu"></div>');
    $('.mega-menu >ul').wrap('<div class="wrap_dropdown fullwidth"></div>');
    $('ul.mainnav').show();
});
jQuery(document).ready(function() {
    if(jQuery('#masonry').length){
       jQuery('#masonry').masonry({
        itemSelector: '.masonry-item',
        // columnWidth: 370,
        percentPosition: true,
        gutter: 30,
        fitWidth: true
       });
       imagesLoaded(jQuery('#masonry'),function(){
        jQuery('#masonry').masonry();
       });
    }
});


