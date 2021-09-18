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

    $("div#getinfo").on("click", function() {
        let movieName = $("#edit-imdb-title").val();
        console.log(movieName);
        searchIMDB(movieName);
    });

    function searchIMDB(movieName) {
        let movieTitle = movieName;
        //pull movie date IMDB
        const settingsIMDB = {
            "async": true,
            "crossDomain": true,
            "url": "https://imdb8.p.rapidapi.com/title/find?q=" + movieTitle,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "aaed1e5a26msh548986faf440074p10f599jsn52fce399fdac",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        };

        //get title suggestions
        $.ajax(settingsIMDB).done(function(responseIMDB) {
            console.log(responseIMDB);
            if (responseIMDB.length !== 0) {
                $('#sugesstion-overlay').remove();
                $("#add-simple-products").append("<div id='sugesstion-overlay'><h2>select your movie</h2> <div id='suggestion'></div></div>");


                $.each(responseIMDB['results'], function(index, value) {
                    if (value['titleType'] == 'movie' || value['titleType'] == 'tvSeries') {
                        var productName = value['title'];
                        var id = value['id'].split("/");
                        var productId = id['2'];

                        var actors = "";
                        $.each(value['principals'], function(key, value) {
                            actors += value['name'] + ',';
                        });
                        
                        $('#suggestion').append("<div class='items'  id='" + productId + "' actors='" + actors + "'>" + productName + " " + value['year'] + "</div>");
                    }
                });

                $("div#suggestion .items").on('click', function(e) {

                    $('#edit-actors').val($(this).attr('actors'));
                    // Get description info
                    getOverview($(this).attr('id'));
                    getvideo($(this).attr('id'));
                });

            } else {
                $("#add-simple-products").append("<div id='sugesstion-overlay'><h2>Sorry No results for this UPC.</h2>");
            }
        });
    }


    function getOverview(imdbId) {
        console.log('imdbId' + imdbId);
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=" + imdbId + "&currentCountry=US",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "aaed1e5a26msh548986faf440074p10f599jsn52fce399fdac",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function(responseOverview) {

            $('#edit-description').val(responseOverview['plotOutline']['text']);
            $('#edit-category').val(responseOverview['genres']);
            $('#edit-ratings').val(responseOverview['ratings']['rating']);
        });
    }

    function getvideo(imdbId) {
        console.log('getvideo' + imdbId);
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://imdb8.p.rapidapi.com/title/get-videos?tconst=" + imdbId + "&limit=1&region=US",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "aaed1e5a26msh548986faf440074p10f599jsn52fce399fdac",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function(responseOverview) {
            getTriailer(responseOverview['resource']['videos'][0]['id']);
        });
    }

    function getTriailer(imdbId) {
        var vid = imdbId.split("/");

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://imdb8.p.rapidapi.com/title/get-video-playback?viconst=" + vid[2] + "&region=US",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "aaed1e5a26msh548986faf440074p10f599jsn52fce399fdac",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function(responseOverview) {
            $('#edit-trailer').val(responseOverview['resource']['encodings'][1]['playUrl']);

        });

    }
})(jQuery, Drupal, drupalSettings, Quagga);