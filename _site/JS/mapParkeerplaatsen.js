    
	var mymap = L.map('mapid').setView([51.062311,3.70000], 11);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWF0dGlleGUiLCJhIjoiY2o2Nmo5MGlvMjV6MTM3cjFtNnpybGgwbyJ9.w9WBPf9cFU6xPW4o7Nlzzw', { 
		id: 'mapbox.streets'
	}).addTo(mymap);

function basementDweller (feature, layer){
    
     layer.bindPopup("Hier kan je parkeren!!");
}

L.geoJson(Parking,{
    
    onEachFeature: basementDweller
}).addTo(mymap);

