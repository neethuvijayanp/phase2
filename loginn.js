const indicator = document.querySelector(".indicator");
         const input = document.querySelector(".password");
         const weak = document.querySelector(".weak");
         const medium = document.querySelector(".medium");
         const strong = document.querySelector(".strong");
         const text = document.querySelector(".text");
         const showBtn = document.querySelector(".showBtn");

function checkInputs() {
  
  var username=document.getElementById("username");
  	
 const usernameValue = username.value.trim();
 console.log(usernameValue)
  if(usernameValue === '') {
		msg.innerHTML="Username cannot be blank";
    msg.style.color="red";
	}
  else if(usernameValue.length <3){
    msg.innerHTML="Enter atleast 3 characters"
    msg.style.color="red";

}else if(/^([\w]+)$/.test(usernameValue)){
  
  msg.innerHTML="Valid Username"
  msg.style.color="green";
  
}
}
         

let regExpWeak = /[a-z]/;
let regExpMedium =/^(?=.*\d)(?=.*[a-z]).{6,}$/ ;
let regExpStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
         function trigger(){
           if(input.value != ""){
             indicator.style.display = "block";
             indicator.style.display = "flex";
            
              if(input.value.match(regExpWeak)){
               weak.classList.add("active");
               text.style.display = "block";
               text.textContent = "Your password is too week";
               text.classList.add("weak");
             }
             if(input.value.match(regExpMedium)){
               medium.classList.add("active");
               text.textContent = "Your password is medium";
               text.classList.add("medium");
             }else{
               medium.classList.remove("active");
               text.classList.remove("medium");
             }
             if(input.value.match(regExpStrong)){
               weak.classList.add("active");
               medium.classList.add("active");
               strong.classList.add("active");
               text.textContent = "Your password is strong";
               text.classList.add("strong");
             }else{
               strong.classList.remove("active");
               text.classList.remove("strong");
             }
             showBtn.style.display = "block";
             showBtn.onclick = function(){
               if(input.type == "password"){
                 input.type = "text";
                 showBtn.style.color = "#23ad5c";
               }else{
                 input.type = "password";
                 showBtn.style.color = "#000";
               }
             }
           }else{
             indicator.style.display = "none";
             text.style.display = "none";
             showBtn.style.display = "none";
           }
         }