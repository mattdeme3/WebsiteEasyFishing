/********************************************************
 * @author
 * @created 06/12/2016
 * @modified
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @function beschrijf wat het script doet
 * TODO: vervolledig bovenstaande informatie en wis deze todo
 ********************************************************/
//1. variabelen
//2. Constructor
//3. Events
//4. Functies
function showMenu() {
    var x = document.getElementById("Navigatie");
    if (x.className === "hoofdnav") {
        x.className += " responsive";
    } else {
        x.className = "hoofdnav";
    }
}

