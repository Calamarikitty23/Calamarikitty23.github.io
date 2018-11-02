var windSpeed=46;
var temperature=60;
var windChill= 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed,0.16) + 0.4275 * temperature * Math.pow(windSpeed,0.16);
document.getElementById("windy").innerHTML= Math.round(windChill);