var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5600685&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
request.send();
request.onload = function() {
var meridian = JSON.parse(request.responseText);
console.log(meridian);

document.getElementById('temp').innerHTML=meridian.main.temp;
document.getElementById("temp").innerHTML = Math.round(meridian.main.temp) + "" + "°F";
}
