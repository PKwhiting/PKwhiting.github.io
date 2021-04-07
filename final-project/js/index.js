const hambutton = document.querySelector('#hamburger');
const mainnav = document.querySelector('.nav');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=30.1405&lon=-97.8330&units=imperial&exclude=hourly&appid=e1a24a23dfe17b8311787ee919f089dc";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = jsObject.current.temp;
    document.getElementById('temp').innerHTML = temp;

    let currently = jsObject.current.weather[0].description;
    document.getElementById('currently').innerHTML = currently;

    let humidity = jsObject.current.humidity;
    document.getElementById('hum').innerHTML = humidity;
    
    if (jsObject.alert != undefined){
        let alert = jsObject.aler.description
        alert(alert);
    }


    function unixConverter(stamp){
        var a = new Date(stamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var time = date + ' ' + month + ' ' + year;
        return time;
    }
    
    let day1date = jsObject.daily[1].dt;
    let day1temp = jsObject.daily[1].temp.day;
    day1date = unixConverter(day1date);
    let day2date = jsObject.daily[2].dt;
    let day2temp = jsObject.daily[2].temp.day;
    day2date = unixConverter(day2date);
    let day3date = jsObject.daily[3].dt;
    let day3temp = jsObject.daily[3].temp.day;
    day3date = unixConverter(day3date);
    console.log(day1date, day2date, day3date);

    document.getElementById('day1').innerHTML = day1date + ': ' + day1temp + " &#176;F";
    document.getElementById('day2').innerHTML = day2date + ': ' + day2temp + " &#176;F"
    document.getElementById('day3').innerHTML = day3date + ': ' + day3temp + " &#176;F"
    

  });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var x = document.lastModified;
var year = new Date().getFullYear();
document.getElementById('lastModified').innerHTML = x;
document.getElementById('copyright').innerHTML = year;

let a = b =5;
console.log(b);

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 30.1405, lng: -97.8330 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}





