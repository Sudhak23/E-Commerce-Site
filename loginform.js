//setting fields to check whether the input filled correctly or Not
let emailcheck = false;
let passwordcheck = false;
let namecheck = false;

//Containers
var nameContainer = document.querySelector(".uname")
var usernameContainer = document.querySelector(".usernamee")
var passwordContainer = document.querySelector(".password")


//selecting Icons
var nameIcon = document.getElementById("usericon");
var usernameIcon = document.getElementById("emailicon");
var passwordIcon = document.getElementById("passicon");

//Selecting Lables
var nameLabel = document.getElementById("userlab");
var usernameLabel = document.getElementById("emaillab");
var passwordLabel = document.getElementById("passlab");

// //selecting input box  values
var nameInput = document.getElementById("username");
var emailInput = document.getElementById("usernamee");
var passwordInput = document.getElementById("password");

// nameInput.addEventListener("keyup",function(){
//     var enteredvalue = nameInput.value
//     if(enteredvalue==""){
//         nameLabel.style.visibility="visible"
//         nameIcon.style.visibility = "hidden"
//         namecheck=false
//     }
//     else{
//         nameLabel.style.visibility="hidden"
//         nameIcon.style.visibility = "visible"
//         namecheck=true

//     }
// });

function uname() {
    var enteredvalue = nameInput.value
    if (enteredvalue == "") {
        nameLabel.style.visibility = "visible"
        nameIcon.style.visibility = "hidden"
        namecheck = false
    }
    else {
        nameLabel.style.visibility = "hidden"
        nameIcon.style.visibility = "visible"
        namecheck = true

    }
}


// emailInput.addEventListener("keyup",function(){
//     //user Input values
//     var enteredvalue = emailInput.value
//     if(enteredvalue==""){
//         //show label and hide Icon
//         usernameLabel.style.visibility="visible"
//         usernameIcon.style.visibility="hidden"
//         emailcheck=false
//     }
//     else{
//         usernameLabel.style.visibility="hidden"
//         usernameIcon.style.visibility="visible"
//         emailcheck=true
//     }
// });

function email() {
    //user Input values
    var enteredvalue = emailInput.value
    if (enteredvalue == "") {
        //show label and hide Icon
        usernameLabel.style.visibility = "visible"
        usernameIcon.style.visibility = "hidden"
        emailcheck = false
    }
    else {
        usernameLabel.style.visibility = "hidden"
        usernameIcon.style.visibility = "visible"
        emailcheck = true
    }

}

// passwordInput.addEventListener("keyup",function(){
//     //user Input values
//     var enteredvalue = passwordInput.value
//     if(enteredvalue==""){
//         //show label and hide Icon
//         passwordLabel.style.visibility="visible"
//         passwordIcon.style.visibility="hidden"
//         passwordcheck=false
//     }
//     else{
//         passwordLabel.style.visibility="hidden"
//         passwordIcon.style.visibility="visible"
//         passwordcheck=true
//     }
// });
function password() {
    //user Input values
    var enteredvalue = passwordInput.value
    if (enteredvalue == "") {
        //show label and hide Icon
        passwordLabel.style.visibility = "visible"
        passwordIcon.style.visibility = "hidden"
        passwordcheck = false
    }
    else {
        passwordLabel.style.visibility = "hidden"
        passwordIcon.style.visibility = "visible"
        passwordcheck = true
    }
}


// document.getElementById("loginform").addEventListener("submit",function(event){
//     event.preventDefault();
//     var username = document.getElementById("username").value;
//     window.location.href = "userindex.html?username=" + encodeURIComponent(username);

// });

// window.onload = function(){
//     var params = new URLSearchParams(window.location.search);
//     var Username = params.get("username");
//     document.getElementById("welcomemessage").innerHTML = "Welcome, " + Username;
// };


var data = window.location.search;
console.log(data);
var params = new URLSearchParams(data);
var message = params.get("username") 
console.log(message)
console.log(params.get("email"))
document.getElementById("welcomemessage").textContent = `Welcome ${message} Happy Shopping!`;
console.log(params)




