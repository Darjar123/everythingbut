/**
 * settingPoint
 */
var points = new Array();
var htmls = new Array();
var icons = new Array();
var lines = new Array();
var style = null;


points[0] = new google.maps.LatLng(51.5074806,-0.1333648);
htmls[0] = '<div class="gmap_window"><div class="txtarea"><p class="address"><i class="fa fa-map-marker" aria-hidden="true"></i>123 Pall Mall, London England </p><p class="phone"><i class="fa fa-phone" aria-hidden="true"></i>(800) 0123 4567 890 </p> <p class="mail"> <i class="fa fa-envelope-o" aria-hidden="true"></i>support@themes.com</p></div></div>';
icons[0] = 'images/ic-map.png';


/***********
 * start 開始位置
 * end 終了位置
 * color 色
 * ways 中間地点
 */

lines[0] = new Array();
lines[0]['start'] = new google.maps.LatLng(51.5074806,-0.1333648);
lines[0]['end'] = new google.maps.LatLng(35.829369,139.690754);
lines[0]['color'] = '#ff8a00';
lines[0]['opacity'] = 0.7;
lines[0]['weight'] = 4;
lines[0]['ways'] = new Array();
lines[0]['ways'] = [
new google.maps.LatLng(35.828235,139.690563),new google.maps.LatLng(35.828344,139.690692),new google.maps.LatLng(35.828510,139.690579),new google.maps.LatLng(35.828908,139.690354),new google.maps.LatLng(35.829084,139.690319),new google.maps.LatLng(35.829473,139.690268),new google.maps.LatLng(35.829479,139.690555),new google.maps.LatLng(35.829508,139.690717),new google.maps.LatLng(35.829369,139.690754)];


style = [ { "featureType": "water", "stylers": [ { "color": "#808080" } ] },{ "featureType": "administrative.country", "stylers": [ { "visibility": "off" } ] },{ } ];