var sidenav = document.querySelector(".side-navbar");

function showNavbar(){
    sidenav.style.left="0";

}
function closeNavbar(){
    sidenav.style.left="-60%";

}


// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();

