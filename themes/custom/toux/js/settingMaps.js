
var dispId = "map";


var pCenter = new google.maps.LatLng(51.5074806,-0.1333648);


var mapType  = google.maps.MapTypeId.ROADMAP;


var zoomLv = 18;

var isZoomControl = true;


var isStreetViewControl = true;


var isPanControl = true;


var isScrollWheel = false;


var isMapTypeControl = true;


var ctrlDispPosition = google.maps.ControlPosition.LEFT_TOP;


var isOpenFuki = true;

var isDispFuki = true;

var intDispFuki = 0;

var isPolyline = true;


var isStyle = false;


maps = new googlemap();
window.onload = function() {
	maps.setMap();
}