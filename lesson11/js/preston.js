
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e1a24a23dfe17b8311787ee919f089dc";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = jsObject.main.temp;
    let currently = jsObject.weather[0].description;
    let high = jsObject.main.temp_max;
    let humidity = jsObject.main.humidity;
    let windspeed = jsObject.wind.speed;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // console.log(desc);

    //calculating windchill
    let windchill = 35.74 + (0.6215*temp) - (35.75 * (Math.pow(windspeed,.16))) + (.4275*temp*(Math.pow(windspeed,.16)));
    windchill = parseInt(windchill);

    document.getElementById('currently').textContent = currently;
    document.getElementById('temp').textContent = temp;
    // document.getElementById('high').textContent = high;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('windspeed').textContent = windspeed;
    
    if (temp <=50 && windspeed>3){
      document.getElementById('windchilldisplay').style.display = 'block';
      document.getElementById('windchill').textContent = windchill;
    }
    
    

  });

const api1URL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=e1a24a23dfe17b8311787ee919f089dc";
fetch(api1URL)
  .then((response) => response.json())
  .then((forecastObject) => {
    console.log(forecastObject);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var i = 0;
    for (let day = 0; day < forecastObject.list.length; day++) {
      if (forecastObject.list[day].dt_txt.includes('18:00:00')){
        i = i + 1;
        const d = new Date(forecastObject.list[day].dt_txt);
        const imagesrc = 'https://openweathermap.org/img/wn/' + forecastObject.list[day].weather[0].icon + '@2x.png';
        const desc = forecastObject.list[day].weather[0].description;
        document.getElementById(`date${i}`).textContent = days[d.getDay()];
        document.getElementById(`temp${i}`).textContent = Math.round(forecastObject.list[day].main.temp);
        document.getElementById(`img${i}`).setAttribute('src', imagesrc);
        document.getElementById(`img${i}`).setAttribute('alt', desc);
      }
    }
});

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if  (towns[i].name == 'Preston'){
          towns[i].events.forEach(element => {
            let br = document.createElement('br');
            let span = document.createElement('span');
            span.textContent = element;
            document.querySelector('div.localevents').appendChild(span);
            document.querySelector('div.localevents').appendChild(br);
          }); 
        }
    }
  });




