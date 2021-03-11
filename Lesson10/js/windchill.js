
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=e1a24a23dfe17b8311787ee919f089dc";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = jsObject.list[0].main.temp;
    let currently = jsObject.list[0].description;
    let high = jsObject.list[0].main.temp_max;
    let humidity = jsObject.list[0].main.humidity;
    let windspeed = jsObject.list[0].wind.speed;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array


    //calculating windchill
    let windchill = 35.74 + (0.6215*temp) - (35.75 * (Math.pow(windspeed,.16))) + (.4275*temp*(Math.pow(windspeed,.16)));
    windchill = parseInt(windchill);

    document.getElementById('currently').textContent = currently;
    document.getElementById('temp').textContent = temp;
    document.getElementById('high').textContent = high;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('windchill').textContent = windchill;
    document.getElementById('windspeed').textContent = windspeed;




    
    let temp1 = jsObject.list[6].main.temp;
    let temp2 = jsObject.list[14].main.temp;
    let temp3 = jsObject.list[22].main.temp;
    let temp4 = jsObject.list[30].main.temp;
    let temp5 = jsObject.list[38].main.temp;

    let date1 = jsObject.list[6].dt_txt;
    let date2 = jsObject.list[14].dt_txt;
    let date3 = jsObject.list[22].dt_txt;
    let date4 = jsObject.list[30].dt_txt;
    let date5 = jsObject.list[38].dt_txt;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const image1src = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png';
    const image2src = 'https://openweathermap.org/img/w/' + jsObject.list[14].weather[0].icon + '.png';
    const image3src = 'https://openweathermap.org/img/w/' + jsObject.list[22].weather[0].icon + '.png';
    const image4src = 'https://openweathermap.org/img/w/' + jsObject.list[30].weather[0].icon + '.png';
    const image5src = 'https://openweathermap.org/img/w/' + jsObject.list[38].weather[0].icon + '.png';



    date1 = new Date(date1);
    date1 = days[date1.getDay()];
    document.getElementById('date1').textContent = date1;
    document.getElementById('temp1').textContent = temp1;

    date2 = new Date(date2);
    date2 = days[date2.getDay()];
    document.getElementById('date2').textContent = date2
    document.getElementById('temp2').textContent = temp2;

    date3 = new Date(date3);
    date3 = days[date3.getDay()];
    document.getElementById('date3').textContent = date3;
    document.getElementById('temp3').textContent = temp3;

    date4 = new Date(date4);
    date4 = days[date4.getDay()];
    document.getElementById('date4').textContent = date4;
    document.getElementById('temp4').textContent = temp4;

    date5 = new Date(date5);
    date5 = days[date5.getDay()];
    document.getElementById('date5').textContent = date5;
    document.getElementById('temp5').textContent = temp5;

    let desc1 = jsObject.list[6].weather[0].description;
    let desc2 = jsObject.list[14].weather[0].description;
    let desc3 = jsObject.list[22].weather[0].description;
    let desc4 = jsObject.list[30].weather[0].description;
    let desc5 = jsObject.list[38].weather[0].description;

    document.getElementById('img1').setAttribute('src', image1src);  
    document.getElementById('img1').setAttribute('alt', desc1);
    document.getElementById('img2').setAttribute('src', image2src);  
    document.getElementById('img2').setAttribute('alt', desc2);
    document.getElementById('img3').setAttribute('src', image3src);  
    document.getElementById('img3').setAttribute('alt', desc3);
    document.getElementById('img4').setAttribute('src', image4src);  
    document.getElementById('img4').setAttribute('alt', desc4);
    document.getElementById('img5').setAttribute('src', image5src);  
    document.getElementById('img5').setAttribute('alt', desc5);
  });
  





