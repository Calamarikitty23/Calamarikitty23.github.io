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
document.getElementById('windy').innerHTML= Math.round(fishhaven.wind.deg);

var iconcode=fishhaven.weather[0].icon;
var lightbulb="//openweathermap.org/img/w/" + iconcode + '.png';
document.getElementById('lightbulb').src=lightbulb;

}

var requester = new XMLHttpRequest();
requester.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
requester.send();
requester.onload = function() {
var fishhaven = JSON.parse(requester.responseText);
console.log(fishhaven);

document.getElementById('monday').innerHTML=fishhaven.list[1].main.temp;
document.getElementById("monday").innerHTML = Math.round(fishhaven.list[1].main.temp) + "" + "°F";
document.getElementById('tuesday').innerHTML=fishhaven.list[2].main.temp+ "" + "°F";
document.getElementById("tuesday").innerHTML = Math.round(fishhaven.list[2].main.temp) + "" + "°F";
document.getElementById('wednesday').innerHTML=fishhaven.list[3].main.temp+ "" + "°F";
document.getElementById("wednesday").innerHTML = Math.round(fishhaven.list[3].main.temp) + "" + "°F";
document.getElementById('thursday').innerHTML=fishhaven.list[4].main.temp+ "" + "°F";
document.getElementById("thursday").innerHTML = Math.round(fishhaven.list[4].main.temp) + "" + "°F";
document.getElementById('friday').innerHTML=fishhaven.list[5].main.temp+ "" + "°F";
document.getElementById("friday").innerHTML = Math.round(fishhaven.list[5].main.temp) + "" + "°F";


}