var article = document.querySelector('article');
var requestURL = 'http://openweathermap.org/img/w/10d.png';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var idaho= request.response;
show(idaho);

}

function show(jsonObj) {
var data = jsonObj['towns'];
  
for (var i = 0; i < data.length; i++){
 if ( i === 0) {continue;}
 if ( i === 2) {continue;}
 if ( i === 3) {continue;}
 if ( i === 6) {continue;}

var myArticle = document.createElement('div');
var myH2 = document.createElement('h3');
var myPara1 = document.createElement('p');
var myPara2 = document.createElement('p');
var myPara3 = document.createElement('p');
var myPara4 = document.createElement('p');
var myImg = document.createElement('img');

myH2.textContent = data[i].name;
myPara1.textContent = data[i].motto;
myPara2.textContent = 'Year Founded:' + data[i].yearFounded;
myPara3.textContent = 'Population:'+ data[i].currentPopulation;
myPara4.textContent = 'Average Rain Fall:' + data[i].averageRainfall;

myArticle.appendChild(myH2);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myPara4);
myArticle.appendChild(myImg);
if (i === 1) myImg.src="images/fishhaven.jpg";
if (i === 4) myImg.src="images/downtownpreston.jpg";
if (i === 5) myImg.src="images/geyser.jpg";
article.appendChild(myArticle);
}
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
"cod":200}*/
