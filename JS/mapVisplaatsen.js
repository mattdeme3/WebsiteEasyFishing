

	var mymap = L.map('mapid').setView([51.162311,3.745308], 11);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', { 
		id: 'mapbox.streets'
	}).addTo(mymap);


function basementDweller (feature, layer){
    
     layer.bindPopup("Hier is een vissersplaats!"); 
};

L.geoJson(fishfish,{
    
    onEachFeature: basementDweller
}).addTo(mymap);
