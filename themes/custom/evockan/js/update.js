 
;(function ( $){
	jQuery(document).ready(function($){
		if($(".nav-search").length > 0){
	        $(".nav-search form").find('input[type="search"]').wrap('<div class="nav-search-inner"></div>');
	    }
	    $(".megamenu  .megamenu-panel .megamenu-lists .megamenu-list ul").removeClass();

	
	});

})( jQuery );
