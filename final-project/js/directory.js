// const apiURL = "https://jsoneditoronline.org/#left=cloud.38a853c89133466197448ba72c8dd2f7";
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//   let card = document.getElementById("cards");
//     card[1].p.innerhtml = "tacos";




//   });
fetch("../slcoc.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));