var x = document.lastModified;
var year = new Date().getFullYear();
document.getElementById('lastModified').innerHTML = x;
document.getElementById('copyright').innerHTML = year;

const hambutton = document.querySelector('#hamburger');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

var y = document.getElementsByClassName('announcement');
var day = new Date();
var daynum = day.getDay();
if (daynum == 5 ){
    document.getElementById('announcement').style.display = 'block';
    document.getElementById('hamburger').style.top = '2.8rem';
}
else {
    document.getElementById('announcement').style.display = 'none';
}

