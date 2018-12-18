 var article = document.querySelector('article');
    var requestURL = 'https://www.lds.org/temples/list?lang=eng/lds.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    var temple= request.response;
    show(temple);
    
}

  function show(jsonObj) {
    var data = jsonObj['temples'];
      
  for (var i = 0; i < data.length; i++) {
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
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');
    var myPara7 = document.createElement('p');
    var myPara8 = document.createElement('p');
    var myImg = document.createElement('img');

    myH2.textContent = data[i].name;
    myPara1.textContent = 'Address:' + data[i].address;
    myPara2.textContent = 'Telephone:' + data[i].telephoe;
    myPara3.textContent = 'Email:'+ data[i].email;
    myPara4.textContent = 'Services:' + data[i].services;
    myPara5.textContent = 'History:' + data[i].history;
    myPara6.textContent = 'Ordinance Schedule:'+ data[i].ordinanceSchedule;
    myPara7.textContent = 'Session Schedule:'+ data[i].sessionSchedule;
    myPara8.textContent = 'Temple Closure Schedule:'+ data[i].templeclosureSchedule;
  

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);
    myArticle.appendChild(myImg);
    if (i === 1) myImg.src="images/";
    if (i === 4) myImg.src="images/";
    if (i === 5) myImg.src="images/";
    article.appendChild(myArticle);
  }
  }
var article = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
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
  
for (var i = 0; i < data.length; i++) {
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
article.appendChild(myArticle);
}
}

/*<!--The temple page describes the details for at least four temples providing information about the address,
     telephone, email, services, history, ordinance schedule, session schedule, temple closure schedule, 
     and current conditions weather information obtained from a third party API.-->*/