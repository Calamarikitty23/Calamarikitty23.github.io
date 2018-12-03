var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
request.send();
request.onload = function() {
var sodasprings = JSON.parse(request.responseText);
console.log(sodasprings);

document.getElementById('current').innerHTML=sodasprings.weather[0].description;
document.getElementById('temp').innerHTML=sodasprings.main.temp;
document.getElementById("temp").innerHTML = Math.round(sodasprings.main.temp) + "" + "°F";
document.getElementById('humid').innerHTML=sodasprings.main.humidity + "" + "%";
document.getElementById('speedy').innerHTML=sodasprings.wind.speed+ "" + "mph";
document.getElementById('windy').innerHTML= sodasprings.wind.deg;

var iconcode=sodasprings.weather[0].icon;
var lightbulb="//openweathermap.org/img/w/" + iconcode + '.png';
document.getElementById('lightbulb').src=lightbulb;

var winds=sodasprings.wind.speed;
var tempe=sodasprings.main.temp;
var chilly= 35.74 + 0.6215 * tempe - 35.75 * Math.pow(winds,0.16) + 0.4275 * tempe * Math.pow(winds,0.16);
document.getElementById("windy").innerHTML= Math.round(chilly);
}

var requester = new XMLHttpRequest();
requester.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
requester.send();
requester.onload = function() {
var sodasprings = JSON.parse(requester.responseText);
console.log(sodasprings);

document.getElementById("monday").innerHTML = sodasprings.list[6].main.temp + "" + "°F";
document.getElementById("tuesday").innerHTML = sodasprings.list[14].main.temp + "" + "°F";
document.getElementById("wednesday").innerHTML = sodasprings.list[22].main.temp + "" + "°F";
document.getElementById("thursday").innerHTML = sodasprings.list[30].main.temp + "" + "°F";
document.getElementById("friday").innerHTML = sodasprings.list[38].main.temp + "" + "°F";

}