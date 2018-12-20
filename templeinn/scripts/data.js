 var article = document.querySelector('article');
    var requestURL = 'https://github.com/Calamarikitty23/Calamarikitty23.github.io/blob/master/templeinn/temple.json';
    var request = new XMLHttpRequest();
    request.open('GET', request);
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
    if (i === 1) myImg.src="images/boston-lds-temple.jpg";
    if  (i == 3) myImg.src="images/meridianidahotemple.jpg"
    if (i === 4) myImg.src="images/saltlakecityutahtemple.jpg";
    if (i === 5) myImg.src="images/tucsonarizonatemple.jpg";
    article.appendChild(myArticle);
  }
  }