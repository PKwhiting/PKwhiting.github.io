var x = document.lastModified;
var year = new Date().getFullYear();
document.getElementById('lastModified').innerHTML = x;
document.getElementById('copyright').innerHTML = year;

const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
