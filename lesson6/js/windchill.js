let windspeed = document.getElementById('windspeed').innerHTML;
let temp = document.getElementById('temp').innerHTML;

let windchill = 35.74 + (0.6215*temp) - (35.75 * (Math.pow(windspeed,.16))) + (.4275*temp*(Math.pow(windspeed,.16)));
windchill = parseInt(windchill);
document.getElementById('windchill').innerHTML = windchill;