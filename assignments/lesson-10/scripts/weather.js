var request = new XMLHttpRequest();
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
request.send();
request.onload = function() {
var preston = JSON.parse(request.responseText);
console.log(preston);

document.getElementById('current').innerHTML=preston.weather[0].description;
document.getElementById('temp').innerHTML=preston.main.temp;
document.getElementById('humid').innerHTML=preston.main.humidity;
document.getElementById('speedy').innerHTML=preston.wind.speed;
document.getElementById('windy').innerHTML=preston.wind.deg;

}
var request = new XMLHttpRequest();
request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
request.send();
request.onload = function() {
var preston = JSON.parse(request.responseText);
console.log(preston);

document.getElementById('monday').innerHTML=preston.list[1].main.temp;
document.getElementById('tuesday').innerHTML=preston.list[2].main.temp;
document.getElementById('wednesday').innerHTML=preston.list[3].main.temp;
document.getElementById('thursday').innerHTML=preston.list[4].main.temp;
document.getElementById('friday').innerHTML=preston.list[5].main.temp;

}
/*{"coord":
{"lon":145.77,"lat":-16.92},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
"base":"cmc stations",
"main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
"wind":{"speed":5.1,"deg":150},
"clouds":{"all":75},
"rain":{"3h":3},
"dt":1435658272,
"sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
"id":2172797,
"name":"Cairns",
"cod":200}

Preston  5604473

Soda Springs 55607916

Fish Haven 5585010 */
