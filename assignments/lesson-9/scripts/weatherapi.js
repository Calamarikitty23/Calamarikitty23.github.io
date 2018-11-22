    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a996fa0bda7d363240d97a43b64c13cc&units=imperial');
    request.send();
    request.onload = function() {
    var preston = JSON.parse(request.responseText);
    console.log(preston);

    document.getElementById('temp').innerHTML=preston.main.temp;
    }

