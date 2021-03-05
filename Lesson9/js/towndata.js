const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if  (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let span1 = document.createElement('p')
            let span2 = document.createElement('p')
            let span3 = document.createElement('p')
            let img = document.createElement('img');
            let div1 = document.createElement('div');

            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            span1.textContent = "Year Founded: " + towns[i].yearFounded;
            span2.textContent = "Population: " + towns[i].currentPopulation;
            span3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            div1.append(h2);
            div1.append(h3);
            div1.append(span1);
            div1.append(span2);
            div1.append(span3);
            card.append(div1);
            card.append(img);
            img.src = towns[i].photo;
            document.querySelector('div.towninformation').appendChild(card);


        }
    }
  });
