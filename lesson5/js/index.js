var x = document.lastModified;
var year = new Date().getFullYear();
document.getElementById('lastModified').innerHTML = x;
document.getElementById('copyright').innerHTML = year;

const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

var y = document.getElementsByClassName('announcement');
var day = new Date();
var daynum = day.getDay();
console.log(daynum);
if (daynum == 5 ){
    document.getElementById('announcement').style.display = 'block';
}
else {
    document.getElementById('announcement').style.display = 'none';
}

