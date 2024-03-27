let namecheck=false;
let emailcheck =false;
let messagecheck = false;

var namefield=document.getElementById("name");
var email=document.getElementById("emailId");
var message=document.getElementById("message");
var popup = document.querySelector(".popup")

namefield.addEventListener("keyup",function(){
    var enteredname = namefield.value;
   
    if(enteredname ==" "){
        namecheck=false
    }
    else{
        namecheck=true
    }
})
 email.addEventListener("keyup",function(){
    var emailentered = email.value;
    if(emailentered==""){
        emailcheck=false
    }
    else{
        emailcheck=true
    }

 })
 message.addEventListener("keyup",function(){
    var enteredmessage = message.value;
    if(enteredmessage==""){
        messagecheck=false
    }
    else{
        messagecheck=true
    }

 })
 var submit = document.getElementById("submitbtnform")

   submit.addEventListener('click',function(e){
    e.preventDefault()
  //  console.log(`${enteredname , emailentered , enteredmessage}`)
  if( namecheck == true && emailcheck == true && messagecheck == true){
    popup.style.top="200px"
    popup.textContent = "Form Submitted Successfully"
    popup.style.backgroundColor = "blue"
    popup.style.opacity="1"
  }
  else{
    popup.textContent="Please Fill the Form"
    popup.style.backgroundColor="red"
    popup.style.top="200px"
    popup.style.opacity="1"
}
setTimeout(
    function() 
    {
        popup.style.top = "-40px"
        popup.style.opacity="0"
    },2000)

})
    
 