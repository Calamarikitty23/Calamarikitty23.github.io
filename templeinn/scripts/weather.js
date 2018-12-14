var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
request.send();
request.onload = function() {
var preston = JSON.parse(request.responseText);
console.log(preston);

document.getElementById('current').innerHTML=preston.weather[0].description;
document.getElementById('temp').innerHTML=preston.main.temp;
document.getElementById("temp").innerHTML = Math.round(preston.main.temp) + "" + "°F";
document.getElementById('humid').innerHTML=preston.main.humidity + "" + "%";
document.getElementById('speedy').innerHTML=preston.wind.speed+ "" + "mph";

var iconcode=preston.weather[0].icon;
var lightbulb="//openweathermap.org/img/w/" + iconcode + '.png';
document.getElementById('lightbulb').src=lightbulb;

var wind = preston.wind.speed;
var temper = preston.main.temp;
var blizzard= 35.74 + 0.6215 * temper - 35.75 * Math.pow(wind,0.16) + 0.4275 * temper * Math.pow(wind,0.16);
document.getElementById("windy").innerHTML= Math.round(blizzard);
}

var requester = new XMLHttpRequest();
requester.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
requester.send();
requester.onload = function() {
var preston = JSON.parse(requester.responseText);
console.log(preston);

document.getElementById("monday").innerHTML = Math.round(preston.list[6].main.temp) + "" + "°F";
document.getElementById("tuesday").innerHTML = Math.round(preston.list[14].main.temp) + "" + "°F";
document.getElementById("wednesday").innerHTML = Math.round(preston.list[22].main.temp) + "" + "°F";
document.getElementById("thursday").innerHTML = Math.round(preston.list[30].main.temp) + "" + "°F";
document.getElementById("friday").innerHTML = Math.round(preston.list[38].main.temp) + "" + "°F";


}