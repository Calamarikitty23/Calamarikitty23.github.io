var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var d= new Date();
var months = ["January", "February", "March", "April", "May", "June", "July, August", "September", "October", "November","December"];
var w = weekday[d.getDay()];
document.getElementById("currentdate").innerHTML= w + ","+ " " + d.getDate() + " " + months[d.getMonth(11)] + " "+ d.getFullYear();

/*Monday, 6 April 2020*/
