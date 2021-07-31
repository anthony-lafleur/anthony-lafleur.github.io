console.log("hewwo world owo");


var menu = 0;

function openMenu() {
    if (menu === 0) {
        console.log("opening menu");
        document.getElementById("nav").classList.add('nav_open');
        document.getElementById("nav_inner").classList.add('nav_inner_open');
        menu = 1;
    } else if (menu === 1) {
        console.log("closing menu");
        document.getElementById("nav").classList.remove('nav_open');
        document.getElementById("nav_inner").classList.remove('nav_inner_open');
        menu = 0;
    }
}