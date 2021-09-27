/*
	Author: Umair Chaudary @ Pixel Art Inc.
	Author URI: http://www.pixelartinc.com/
*/




jQuery(document).ready(function(e) {
    jQuery( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 16000,
      values: [ 1250, 9999 ],
      slide: function( event, ui ) {
        jQuery( "#amount-1" ).val(ui.values[ 0 ]);
        jQuery( "#amount-2" ).val(ui.values[ 1 ] );
    }
});
    jQuery( "#amount" ).val( "$" + jQuery( "#slider-range" ).slider( "values", 0 ) +
      " - $" + jQuery( "#slider-range" ).slider( "values", 1 ) );
});

