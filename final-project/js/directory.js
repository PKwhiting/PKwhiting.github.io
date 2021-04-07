const apiURL = "https://pkwhiting.github.io/final-project/slcoc.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.businesses);
    
    var i;
    for (i = 0; i < 8; i++) {
        let card = document.getElementById("cards");
        let obj = card.children[i];
        obj.children[0].src = jsObject.businesses[0].logo;
    }



  });
// let card = document.getElementById("cards");
// let obj1 = card.children[0];
// obj1.children[3].innerHTML = "tacos";
