    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
    request.send();
    request.onload = function() {
    var preston = JSON.parse(request.responseText);
    console.log(preston);

    document.getElementById('temp').innerHTML=preston.main.temp;
    }



/*Preston  5604473

Soda Springs 55607916

Fish Haven 5585010*/

/* var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", https);
  oReq.send(); function reqListener () {
    console.log(this.responseText);
  }{*/

/*In your weatherapi.js file, create a new instance of the XMLHttpRequest object and assign it to variable named weatherRequest. 

weatherapi.js: To wait for the request object to load, use the onload method to to encase the JSON parser and output statements in a generic function OR use an addEventListener using the load parameter.
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
weatherapi.js: Write the entire parsed JSON output to the console for review and testing using console.log(weatherData); Make sure all output/write statements are within the onload function () { ... }.
weatherapi.js: Write the current temperature to the innerHTML of the current-temp span tag in the HTML body.
Styling the page is optional.
Test the page and debug. To test the console output, use the browser Developer Tools (Inspect) tool and click the Console tab. Your page should display a valid current temperature in Fahrenheit (if you set the units to imperial) on both the screen and in the console tab.*/
