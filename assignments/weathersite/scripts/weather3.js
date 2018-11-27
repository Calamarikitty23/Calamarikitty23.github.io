var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
request.send();
request.onload = function() {
var preston = JSON.parse(request.responseText);
console.log(preston);

document.getElementById('current').innerHTML=preston.weather[0].description;
document.getElementById('temp').innerHTML=preston.main.temp;
document.getElementById("temp").innerHTML = Math.round(preston.main.temp) + "" + "°F";
document.getElementById('humid').innerHTML=preston.main.humidity + "" + "%";
document.getElementById('speedy').innerHTML=preston.wind.speed+ "" + "mph";
document.getElementById('windy').innerHTML= Math.round(preston.wind.deg);

var iconcode=preston.weather[0].icon;
var lightbulb="//openweathermap.org/img/w/" + iconcode + '.png';
document.getElementById('lightbulb').src=lightbulb;

}

var requester = new XMLHttpRequest();
requester.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
requester.send();
requester.onload = function() {
var preston = JSON.parse(requester.responseText);
console.log(preston);

document.getElementById('monday').innerHTML=preston.list[1].main.temp;
document.getElementById("monday").innerHTML = Math.round(preston.list[1].main.temp) + "" + "°F";
document.getElementById('tuesday').innerHTML=preston.list[2].main.temp+ "" + "°F";
document.getElementById("tuesday").innerHTML = Math.round(preston.list[2].main.temp) + "" + "°F";
document.getElementById('wednesday').innerHTML=preston.list[3].main.temp+ "" + "°F";
document.getElementById("wednesday").innerHTML = Math.round(preston.list[3].main.temp) + "" + "°F";
document.getElementById('thursday').innerHTML=preston.list[4].main.temp+ "" + "°F";
document.getElementById("thursday").innerHTML = Math.round(preston.list[4].main.temp) + "" + "°F";
document.getElementById('friday').innerHTML=preston.list[5].main.temp+ "" + "°F";
document.getElementById("friday").innerHTML = Math.round(preston.list[5].main.temp) + "" + "°F";


}