function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://www.example.org/example.txt");
  oReq.send(); {
  }  
/*In your weatherapi.js file, create a new instance of the XMLHttpRequest object and assign it to variable named weatherRequest. 
https://openweathermap.org/find?q=Phoenix%2C+AZ
weatherapi.js: Create an apiURL string variable that stores the OpenWeatherMap.org API call URL as demonstrated in the documentation - https://openweathermap.org/appid Use weather versus forecast data and make sure to use the https:// protocol and the Preston Idaho City ID given above and your own APPID. In order to get Fahrenheit results, set the units option to imperial.
weatherapi.js: Call the open method of the weatherRequest XMLHttpRequest object using the Get method, your apiURL string, and set the optional async parameter to true.
weatherapi.js: Next, send the request using weatherRequest.send();
weatherapi.js: To wait for the request object to load, use the onload method to to encase the JSON parser and output statements in a generic function OR use an addEventListener using the load parameter.
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
weatherapi.js: Write the entire parsed JSON output to the console for review and testing using console.log(weatherData); Make sure all output/write statements are within the onload function () { ... }.
weatherapi.js: Write the current temperature to the innerHTML of the current-temp span tag in the HTML body.
Styling the page is optional.
Test the page and debug. To test the console output, use the browser Developer Tools (Inspect) tool and click the Console tab. Your page should display a valid current temperature in Fahrenheit (if you set the units to imperial) on both the screen and in the console tab.*/