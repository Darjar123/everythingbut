/**
 * Googlemap
 */


var googlemap = function() {
	
	
	this.map = null;
	this.gmarker = new Array();
	this.infoWin = null;
	this.dispId = dispId;
	this.pCenter = pCenter;
	this.zoomLv = zoomLv;
	this.isOpenFuki = isOpenFuki;
	this.isDispFuki = isDispFuki;
	this.intDispFuki = intDispFuki;
	this.isPolyline = isPolyline;
	this.isScrollWheel = isScrollWheel;
	this.isMapTypeControl = isMapTypeControl;
	this.points = points;
	this.htmls = htmls;
	this.icons = icons;
	this.lines = lines;
	this.mapType = mapType;
	this.isZoomControl = isZoomControl;
	this.isStreetViewControl = isStreetViewControl;
	this.isPanControl = isPanControl;
	this.ctrlDispPosition = ctrlDispPosition;
	this.isStyle = isStyle;
	this.style = style;
	
	
	this.setMap = function() {
		
		ctrlPosition = {position:this.ctrlDispPosition};
	
		mapStyles = [];
		if( this.isStyle ) {
			mapStyles = this.style;
			var myOptions = {
				zoom: this.zoomLv,
				center: this.pCenter,
				mapTypeId: this.mapType,
				scrollwheel: this.isScrollWheel,
				mapTypeControl: this.isMapTypeControl,
				zoomControl: this.isZoomControl,
				zoomControlOptions: ctrlPosition,
				streetViewControl: this.isStreetViewControl,
				streetViewControlOptions: ctrlPosition,
				panControl: this.isPanControl,
				panControlOptions: ctrlPosition,
				styles: mapStyles
			};
		}
		else {
			var myOptions = {
				zoom: this.zoomLv,
				center: this.pCenter,
				mapTypeId: this.mapType,
				scrollwheel: this.isScrollWheel,
				mapTypeControl: this.isMapTypeControl,
				zoomControl: this.isZoomControl,
				zoomControlOptions: ctrlPosition,
				streetViewControl: this.isStreetViewControl,
				streetViewControlOptions: ctrlPosition,
				panControl: this.isPanControl,
				panControlOptions: ctrlPosition
			};
		}
		
		this.map = new google.maps.Map(document.getElementById(this.dispId), myOptions);
		
		
		for(i = 0; i < this.points.length; i++) {
			this.gmarker[i] = new google.maps.Marker({
				position: this.points[i],
				map: this.map,
				icon: this.icons[i]
			});
			
			if(this.isOpenFuki) {
				this.setFukiClick(this.gmarker[i], this.htmls[i], this.points[i]);
			}
		}
		
		
		if(this.isDispFuki) {
			setFukiMsg(this.gmarker[this.intDispFuki], this.htmls[this.intDispFuki]);
		}
		
		
		if(this.isPolyline) {
			for(i = 0; i < this.lines.length; i++) {
				this.setPolyline(this.lines[i]);
			}
		}
	}
	
	
	var setFukiMsg = function(marker, html) {
		if(this.infoWin) {
			
			this.infoWin.close();
			this.infoWin = null;
		}
		
		this.infoWin = new google.maps.InfoWindow({
			content: html
		});
		
		
		this.infoWin.open(marker.getMap(), marker);
	}
	
	
	this.setFukiClick = function(marker, html, point) {
		google.maps.event.addListener(marker, 'click', function(event){
			setFukiMsg(marker, html);
			this.map.panTo(point);
		});
	}
	
	
	this.myclick = function(i) {
		setFukiMsg(this.gmarker[i], this.htmls[i]);
		this.map.panTo(this.points[i]);
	}
	
	
	this.setPolyline = function(line) {
		flightPlanCoordinates = line['ways'];
		flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			strokeColor: line['color'],
			strokeOpacity: line['opacity'],
			strokeWeight: line['weight']
		});
		
		flightPath.setMap(this.map);
	}

	this.setZoomIn = function(){
		this.map.setZoom( this.map.getZoom()+1 );
	}
	
	
	this.setZoomOut = function(){
		this.map.setZoom( this.map.getZoom()-1 );
	}
}