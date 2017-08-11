

		var mymap = L.map('mapid').setView([51.162311,3.745308], 11);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWF0dGlleGUiLCJhIjoiY2o2Nmo5MGlvMjV6MTM3cjFtNnpybGgwbyJ9.w9WBPf9cFU6xPW4o7Nlzzw', { 
		id: 'mapbox.streets'
	}).addTo(mymap);

function basementDweller (feature, layer){
    
     layer.bindPopup("Hier is een vissersplaats!"); 
};

L.geoJson(fishfish,{
    
    onEachFeature: basementDweller
}).addTo(mymap);
