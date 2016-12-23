
/********************************************************
 * @author
 * @created 15/12/2016
 * @modified
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @function beschrijf wat het script doet
 * TODO: vervolledig bovenstaande informatie en wis deze todo
 ********************************************************/
//1. variabelen
//2. Constructor
//3. Events
//4. Functies
var url = 'https://datatank.stad.gent/4/milieuennatuur/weersverwachting3d.json';
var data;

//1. Create a XMLHttpRequest object (Send to and load data from a WebAPI)
var xhr = typeof XMLHttpRequest != undefined
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
//2. Declare the type of the response
xhr.responseType = 'json';
//3. Listen to various events
xhr.addEventListener("progress", updateProgress, false);
xhr.addEventListener("load", transferCompleted, false);
xhr.addEventListener("error", transferFailed, false);
xhr.addEventListener("abort", transferCanceled, false);
//4. Define the Event Listeners Methods
function updateProgress (ev) {
    if (ev.lengthComputable) {
        var percentComplete = ev.loaded / ev.total;
        console.log(percentComplete + '%');
    } else {
        // Unable to compute progress information since the total size is unknown
    }
}
function transferCompleted(ev) {
    console.log("The transfer is complete.");
    if(xhr.status == 200){
        //Get the received data --> response
       var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
       var temperatuur = data.properties.attributes[0].value[0];
       var temperatuurN = data.properties.attributes[0].value[11];
       var forcast= data.properties.attributes[6].value[0];
        var windsnelheid = data.properties.attributes[4].value[0];
        var richting = data.properties.attributes[5].value[0];

        if (richting == 0){
            document.getElementById("windrichting").innerhtml = "N";
        } else if (richting <90) {
            document.getElementById("windrichting").innerhtml = "NO";
        } else if (richting ==90){
            document.getElementById("windrichting").innerhtml = "O";
        } else if (richting <180) {
            document.getElementById("windrichting").innerhtml = "ZO";
        } else if (richting ==180){
            document.getElementById("windrichting").innerhtml = "O";
        } else if (richting <270) {
            document.getElementById("windrichting").innerhtml = "ZW";
        } else if (richting ==270){
            document.getElementById("windrichting").innerhtml = "W";
        } else if (richting <359) {
            document.getElementById("windrichting").innerhtml = "ZW";}


       var tempMorgen = data.properties.attributes[0].value[12];
       var tempMorgenN = data.properties.attributes[0].value[23];
       var forcastMorgen = data.properties.attributes[6].value[12];
        var forcastMorgN = data.properties.attributes[6].value[23];
        var windrichtingM = data.properties.attributes[5].value[12];

        if (windrichtingM == 0){
            document.getElementById("windrichtingM").innerhtml = "N";
        } else if (windrichtingM <90) {
            document.getElementById("windrichtingM").innerhtml = "NO";
        } else if (windrichtingM ==90){
            document.getElementById("windrichtingM").innerhtml = "O";
        } else if (windrichtingM <180) {
            document.getElementById("windrichtingM").innerhtml = "ZO";
        } else if (windrichtingM ==180){
            document.getElementById("windrichtingM").innerhtml = "O";
        } else if (windrichtingM <270) {
            document.getElementById("windrichtingM").innerhtml = "ZW";
        } else if (windrichtingM ==270){
            document.getElementById("windrichtingM").innerhtml = "W";
        } else if (windrichtingM <359) {
            document.getElementById("windrichtingM").innerhtml = "ZW";}

       var tempOverM = data.properties.attributes[0].value[24];
       var tempOverMN = data.properties.attributes[0].value[35];
       var forcastOverM = data.properties.attributes[6].value[24];
        var forcastoverMN = data.properties.attributes[6].value[35];
        var windrichtingO = data.properties.attributes[5].value[24];

        if (windrichtingO == 0){
            document.getElementById("windrichtingO").innerhtml = "N";
        } else if (windrichtingO <90) {
            document.getElementById("windrichtingO").innerhtml = "NO";
        } else if (windrichtingO ==90){
            document.getElementById("windrichtingO").innerhtml = "O";
        } else if (windrichtingO <180) {
            document.getElementById("windrichtingO").innerhtml = "ZO";
        } else if (windrichtingO ==180){
            document.getElementById("windrichtingO").innerhtml = "O";
        } else if (windrichtingO <270) {
            document.getElementById("windrichtingO").innerhtml = "ZW";
        } else if (windrichtingO ==270){
            document.getElementById("windrichtingO").innerhtml = "W";
        } else if (windrichtingO <359) {
            document.getElementById("windrichtingO").innerhtml = "ZW";}

    }
        console.log(data);
        document.getElementById("gradenVndg").innerHTML= temperatuur + " °C";
    document.getElementById("gradenVndgNacht").innerHTML= temperatuurN + " °C";
    document.getElementById("windsnelheidVndg").innerHTML= windsnelheid + "km/u";
    switch (forcast){
        case "Clear":
            imgUrl = "img/weer%20iconen/full%20sun.png";
            document.getElementById("weerIcoonVndg").src = imgUrl;
            break;
        case "Partly Cloudy":
            imgUrl = "img/weer%20iconen/light%20clouds.png";
            document.getElementById("weerIcoonVndg").src = imgUrl;
            break;
        case "Mostly Cloudy":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("weerIcoonVndg").src = imgUrl;
            break;
        case "Overcast":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("weerIcoonVndg").src = imgUrl;
            break;
        case "fog":
            imgUrl = "img/weer%20iconen/light%20mist";
            document.getElementById("weerIcoonVndg").src = imgUrl;
            break;}
    document.getElementById("windrichting").innerhtml = richting;



    document.getElementById("gradenMorgen").innerHTML= tempMorgen+ " °C";
    document.getElementById("gradenMorgenN").innerHTML= tempMorgenN + " °C";
    switch (forcastMorgen){
        case "Clear":
            imgUrl = "img/weer%20iconen/full%20sun.png";
            document.getElementById("forcastM").src = imgUrl;
            break;
        case "Partly Cloudy":
            imgUrl = "img/weer%20iconen/light%20clouds.png";
            document.getElementById("forcastM").src = imgUrl;
            break;
        case "Mostly Cloudy":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastM").src = imgUrl;
            break;
        case "Overcast":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastM").src = imgUrl;
            break;
        case "fog":
            imgUrl = "img/weer%20iconen/light%20mist";
            document.getElementById("forcastM").src = imgUrl;
            break;}

    switch (forcastMorgN){
        case "Clear":
            imgUrl = "img/weer%20iconen/full%20sun.png";
            document.getElementById("forcastMn").src = imgUrl;
            break;
        case "Partly Cloudy":
            imgUrl = "img/weer%20iconen/light%20clouds.png";
            document.getElementById("forcastMn").src = imgUrl;
            break;
        case "Mostly Cloudy":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastMn").src = imgUrl;
            break;
        case "Overcast":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastMn").src = imgUrl;
            break;
        case "fog":
            imgUrl = "img/weer%20iconen/light%20mist";
            document.getElementById("forcastMn").src = imgUrl;
            break;}

    document.getElementById("gradenOverM").innerHTML= tempOverM+ " °C";
    document.getElementById("gradenOverMn").innerHTML= tempOverMN + " °C";
    switch (forcastOverM){
        case "Clear":
            imgUrl = "img/weer%20iconen/full%20sun.png";
            document.getElementById("forcastO").src = imgUrl;
            break;
        case "Partly Cloudy":
            imgUrl = "img/weer%20iconen/light%20clouds.png";
            document.getElementById("forcastO").src = imgUrl;
            break;
        case "Mostly Cloudy":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastO").src = imgUrl;
            break;
        case "Overcast":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastO").src = imgUrl;
            break;
        case "fog":
            imgUrl = "img/weer%20iconen/light%20mist";
             document.getElementById("forcastO").src = imgUrl;
            break;}

    switch (forcastoverMN){
        case "Clear":
            imgUrl = "img/weer%20iconen/full%20sun.png";
            document.getElementById("forcastOn").src = imgUrl;
            break;
        case "Partly Cloudy":
            imgUrl = "img/weer%20iconen/light%20clouds.png";
            document.getElementById("forcastOn").src = imgUrl;
            break;
        case "Mostly Cloudy":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastOn").src = imgUrl;
            break;
        case "Overcast":
            imgUrl = "img/weer%20iconen/cloudy.png";
            document.getElementById("forcastOn").src = imgUrl;
            break;
        case "fog":
            imgUrl = "img/weer%20iconen/light%20mist";
            document.getElementById("forcastOn").src = imgUrl;
            break;
    }
}
function transferFailed(ev) {
    console.log("An error occurred while transferring the file.");
    window.alert("Kan geen connectie maken met dataset");
    console.log(ev);
}
function transferCanceled(ev) {
    console.log("The transfer has been canceled by the user.");
    window.alert("Connectie onderbroken door gebruiker");
}
//5. Open the connection or tunnel to the resource on the url
xhr.open('GET', url, true);
//6. Make the request to the specified resource
xhr.send(null);



