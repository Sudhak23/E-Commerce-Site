let offerclose = document.querySelector(".Offerbar");




var sidenav = document.querySelector(".side-navbar");

function showNavbar(){
    sidenav.style.left="0";

}
function closeNavbar(){
    sidenav.style.left="-60%";

}
document.getElementById("offer-close").addEventListener('click',function(){
    offerclose.style.display="none";
});


// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();

