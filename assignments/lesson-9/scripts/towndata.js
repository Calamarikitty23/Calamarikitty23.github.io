    var section = document.querySelector('section');
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
      
  for (var i = 0; i < data.length; i++){
     if ( i === 0) {continue;}
     if ( i === 2) {continue;}
     if ( i === 3) {continue;}
     if ( i === 6) {continue;}

    var mySection = document.createElement('section');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');

    myH2.textContent = data[i].name;
    myPara1.textContent = data[i].motto;
    myPara2.textContent = 'Year Founded:' + data[i].yearFounded;
    myPara3.textContent = 'Population:'+ data[i].currentPopulation;
    myPara4.textContent = 'Average Rain Fall:' + data[i].averageRainfall;

    mySection.appendChild(myH2);
    mySection.appendChild(myPara1);
    mySection.appendChild(myPara2);
    mySection.appendChild(myPara3);
    mySection.appendChild(myPara4);
  }
}

/*
    "towns" : [
    {
      "name": "Franklin",
      "motto": "Where you will grow!",
      "yearFounded": 1788,
      "currentPopulation": 30458,
      "averageRainfall": 21,
      "events" : [
        "March 4: March to the Drum of Donuts",
        "September 5 - 11: Founder Days",
        "December 1 - 26: Christmas in the Heart"
      ]
    },
    {
      "name": "Fish Haven",
      "motto": "Green is our way of life.",
      "yearFounded": 1864,
      "currentPopulation": 501,
      "averageRainfall": 14.20,
      "events" : [
        "April 1: How Big Was That Fish Day",
        "May 15-30: Rush the Creek Days",
        "July 24: Bear Lake Blunder Run",
        "December 12: Light the Tree"
      ]
    },
    {
      "name": "Greenville",
      "motto": "Green is our way of life.",
      "yearFounded": 1805,
      "currentPopulation": 33458,
      "averageRainfall": 25,
      "events" : [
        "February 10-12: Greenbration",
        "May 8 - 18: Greenville Founder Days",
        "June 20: Verde and Valiant Day",
        "November 15-16: Greensome Gathering"
      ]
    },
    {
      "name": "Placerton",
      "motto": "Positive Placement in Placerton.",
      "yearFounded": 1946,
      "currentPopulation": 512,
      "averageRainfall": 39,
      "events" : [
        "July 4: A Blaze of Glory",
        "October 20: Fall through Fall"
      ]
    },
    {
      "name": "Preston",
      "motto": "Home of Napoleon Dynamite",
      "yearFounded": 1866,
      "currentPopulation": 5204,
      "averageRainfall": 16.65,
      "events" : [
        "March 29: Work Creek Revival",
        "July 8-12: Napoleon Dynamite Festival",
        "November 2-4: Freedom Days"
      ]
    },
    {
      "name": "Soda Springs",
      "motto": "Historic Oregon Trail Oasis. The Soda is on Us",
      "yearFounded": 1858,
      "currentPopulation": 2985,
      "averageRainfall": 15.75,
      "events" : [
        "February 29: Geyser Song Day",
        "May 1-6: Days of May Celebration",
        "October 15-16: Octoberfest"
      ]
    },
    {
      "name": "Springfield",
      "motto": "Where everyone is lifted.",
      "yearFounded": 1826,
      "currentPopulation": 17852,
      "averageRainfall": 17,
      "events" : [
        "January 8: Spring into Winter",
        "April 10-20: Celebration of Life",
        "July 31-Aug 15: Dog Days of Summer Festival"
      ]
    }
   ]
  }-->
  */