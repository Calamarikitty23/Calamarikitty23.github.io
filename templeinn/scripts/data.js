    var article = document.querySelector('article');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    var temple= request.response;
    show(temple);
    
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
    if (i === 1) myImg.src="images/fishhaven.jpg";
    if (i === 4) myImg.src="images/downtownpreston.jpg";
    if (i === 5) myImg.src="images/geyser.jpg";
    article.appendChild(myArticle);
  }
}
