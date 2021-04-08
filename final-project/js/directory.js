const apiURL = "https://pkwhiting.github.io/final-project/slcoc.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.businesses);
    
    var i;
    for (i = 0; i < 8; i++) {
        let card = document.getElementById("cards");
        let obj = card.children[i];
        obj.children[1].src = jsObject.businesses[i].logo;
        obj.children[1].alt = jsObject.businesses[i].businessName + " logo";
        obj.children[0].innerHTML= jsObject.businesses[i].businessName;
        obj.children[2].innerHTML= jsObject.businesses[i].businessAddress;
        obj.children[3].innerHTML= jsObject.businesses[i].phoneNumber;
        obj.children[4].innerHTML= jsObject.businesses[i].businessWebsite;
        obj.children[4].href= jsObject.businesses[i].businessWebsite;
        obj.children[5].innerHTML= jsObject.businesses[i].businessDesription;

    }

  });

let grid = document.getElementById("grid");
let list = document.getElementById('list');
grid.onclick = function changeContent(){
  document.getElementById("cards").style.gridTemplateColumns = "auto auto";
}
list.onclick = function changeContent(){
  document.getElementById("cards").style.gridTemplateColumns = "auto";
}