const matches = document.querySelectorAll('.nav_point');

for (let i=0; i<matches.length; i++) {    
matches[i].addEventListener("click", function scrolling (){
    const elemText = document.querySelector(`ul.nav_ul li:nth-child(${i+1}) a`).innerHTML;
    const elem = document.getElementById(elemText);
    const pos = elem.offsetTop;
        window.scrollTo(0, pos); })
}
