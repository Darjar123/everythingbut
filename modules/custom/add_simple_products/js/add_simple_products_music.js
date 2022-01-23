(function($, Drupal, drupalSettings, Quagga) {
    'use strict';

    $("#edit-upc").focus();

    $("form#add-simple-products").submit(function(e) {
        if (!$("#edit-price").val()) {
            e.preventDefault();
            scan();
        }
    });

    $('body').on("click mousedown mouseup focus blur keydown change", function(e) {
        // console.log(e);
    });

    function scan() {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.barcodespider.com/v1/lookup?token=c3d5a52fcf0d090ebaad&upc=" + $("#edit-upc").val(),
            "method": "GET"
        };

        $.ajax(settings).done(function(response) {

            console.log(response.item_attributes['upc']);
            $('#edit-name').val(response.item_attributes['title']);
            $('#edit-imdb-title').val(response.item_attributes['title']);
            $('#edit-thumbnail').val(response.item_attributes['image']);
            $('#edit-thumbnail--description').html('<img src="' + response.item_attributes['image'] + '" />');
            $('#edit-sku').val(response.item_attributes['upc']);
            //response.item_attributes['title'] = response.item_attributes['title'].replace("The", " ");
            //var movieTitle = response.item_attributes['title'].replace(/ *\([^)]*\) */g, " ");
            //movieTitle = movieTitle.split(' ').slice(0,2);

        });
    } //scan

    $("div#getinfomusic").on("click", function() {
        let musicName = $("#edit-imdb-title").val();
        searchIMDB(musicName);
        console.log(musicName);
    });

    function searchIMDB(musicName) {
        let musicTitle = musicName;
        //pull movie date IMDB
        console.log("https://theaudiodb.p.rapidapi.com/searchalbum.php?s=" + musicTitle);
        const settings = {
        	"async": true,
        	"crossDomain": true,
        	"url": "https://theaudiodb.p.rapidapi.com/searchalbum.php?s=" + musicTitle,
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        		"x-rapidapi-key": "50c7ca9354msh84bb82c3c208a3dp1090b4jsned677d4a36c6"
        	}
        };

        //get title suggestions
        $.ajax(settings).done(function (response) {
            console.log(response);
            if (response.length !== 0) {
                
                $('#sugesstion-overlay').remove();
                $("#add-simple-products").append("<div id='sugesstion-overlay' style='position:fixed;top:130px' ><h2>select your album</h2> <div id='suggestion'></div></div>");
                                
                $.each(response['album'], function(index, value) {
                        var productName = value['strArtistStripped'];
                        var productId = value['idAlbum'];
                        var actors = "";
                        $.each(value['principals'], function(key, value) {
                            actors += value['name'] + ',';
                        });
                        
                        $('#suggestion').append("<div class='items'  id='" + productId + "' genre='"+ value['strGenre'] +"' album='" + value['strGenre'] + "'>" + value['strAlbum'] + " " + value['intYearReleased'] + "</div>");
                 
                });

                $("div#suggestion .items").on('click', function(e) {
                    $("#edit-category").val($(this).attr('album'));
                   // $("#edit-category").val($(this).attr('album'));
                  //  $("#edit-category").val($(this).attr('album'));
                    // Get description info
                    //getOverview($(this).attr('id'));
                });

            } else {
                $("#add-simple-products").append("<div id='sugesstion-overlay'><h2>Sorry No results for this UPC.</h2>");
            }
        });
    }


})(jQuery, Drupal, drupalSettings, Quagga);