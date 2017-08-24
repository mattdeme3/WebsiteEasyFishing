    
	var mymap = L.map('mapid').setView([51.062311,3.70000], 11);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		id: 'mapbox.streets'
	}).addTo(mymap);

function basementDweller (feature, layer){
    
     layer.bindPopup("Hier kan je parkeren!!");
}

L.geoJson(Parking,{
    
    onEachFeature: basementDweller
}).addTo(mymap);

