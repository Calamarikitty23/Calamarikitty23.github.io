var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
request.send();
request.onload = function() {
var fishhaven = JSON.parse(request.responseText);
console.log(fishhaven);

document.getElementById('current').innerHTML=fishhaven.weather[0].description;
document.getElementById('temp').innerHTML=fishhaven.main.temp;
document.getElementById("temp").innerHTML = Math.round(fishhaven.main.temp) + "" + "°F";
document.getElementById('humid').innerHTML=fishhaven.main.humidity + "" + "%";
document.getElementById('speedy').innerHTML=fishhaven.wind.speed+ "" + "mph";
document.getElementById('windy').innerHTML= fishhaven.wind.deg;

var iconcode=fishhaven.weather[0].icon;
var lightbulb="//openweathermap.org/img/w/" + iconcode + '.png';
document.getElementById('lightbulb').src=lightbulb;

var winder= fishhaven.wind.speed;
var fiery= fishhaven.main.temp;
var frosty= 35.74 + 0.6215 * fiery - 35.75 * Math.pow(winder,0.16) + 0.4275 * fiery * Math.pow(winder,0.16);
document.getElementById("windy").innerHTML= Math.round(frosty);
}

var requester = new XMLHttpRequest();
requester.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
requester.send();
requester.onload = function() {
var fishhaven = JSON.parse(requester.responseText);
console.log(fishhaven);

document.getElementById("monday").innerHTML = fishhaven.list[6].main.temp + "" + "°F";
document.getElementById("tuesday").innerHTML = fishhaven.list[14].main.temp + "" + "°F";
document.getElementById("wednesday").innerHTML = fishhaven.list[22].main.temp + "" + "°F";
document.getElementById("thursday").innerHTML = fishhaven.list[30].main.temp + "" + "°F";
document.getElementById("friday").innerHTML = fishhaven.list[38].main.temp + "" + "°F";

}