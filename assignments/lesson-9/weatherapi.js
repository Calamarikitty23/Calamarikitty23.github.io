let weatherRequest = new XMLHttpRequest();
let urlAPI =
"https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=42.1&lon=-111.88&zoom=8";
weatherRequest.open('Get', urlAPI, true);

weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse
    (weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("weathersummary")
    .innerHTML =;
    document.getElementById("weathersummary")
    .innerHTML =;
    document.getElementById("weathersummary")
    .innerHTML =;
    document.getElementById("weathersummary")
    .innerHTML =;
    document.getElementById("weathersummary")
    .innerHTML =;
    let imagesrc =
    "" + [0] + ;
    document.getElementById('').innerHTML = imagesrc;
}
/*‹  0¡ôX  city.list.json ¬½Ko$Y– ¸Ÿ_áèZ@Óç¾-³# ¯Ìx±‚Ì eÎê’´ [ÐiÆ2wc C ÐÕÀ` Ec¶jmºõ ¦s
 FhAhHÚ1s7¢û—Ì9æ‘ Yv*/
 /* <h3>Weather Summary</h3>
                <div class="weathersummary">
                <p class="label">
                    Currently:
                    <span class="value">Sunny</span>
                </p>    
                <p class="label">
                    Temperature:
                    <span class="value">32 F</span>
                </p>
                <p class="label">  
                    Humidity:
                    <span class="value">81%</span>
                </p>
                <p class="label">
                    Wind Speed:
                    <span class="value">3 mph</span>
                </p>
                <p class="label">
                    Wind Chill:
                    <span id="windy"></span>
                </p> */

   /*var weatherbug = ()*/


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
/*https://openweathermap.org/find?q=Phoenix%2C+AZ*/