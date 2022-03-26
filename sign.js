const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const strength=document.getElementById("strength")
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();    
    const mobileValue = mobile.value.trim();    
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	

    // Username validation
	if(usernameValue === '') {
		setErrorFor(username, 'Name cannot be blank');
	} 
    else if(usernameValue.length <3){
        setErrorFor(username, 'Enter atleast 3 characters');
    }else if(!/^([A-Za-z\s]+)$/.test(usernameValue)){
        setErrorFor(username, 'Should contain letters and space only');
    }else {
		setSuccessFor(username);
	}
	
    // email validation

	if(emailValue === '') {
		setErrorFor(email,'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	

    // mobile validation
	if(mobileValue === '') {
		setErrorFor(mobile, 'Mobile number cannot be blank');
	 } else if(mobileValue.replace(/\D/g,'').length!= 10){
        setErrorFor(mobile,'Minimum 10 numbers')
     }else if(!isMobile(mobileValue)){
        setErrorFor(mobile,'Invalid format')
     }
    else {
		setSuccessFor(mobile);
	}


    // password validation
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if(passwordValue.length<8){
        setErrorFor(password,'Minumum 8 characters')
    }
    else if(!isPassword(passwordValue)){
        setErrorFor(password,'Atleast one uppercase, lowercase and number')
    }
    
     
    else {
		setSuccessFor(password);
        
        var strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{12,}$/
        
        if(passwordValue.length==8){
        strength.innerHTML="Password is week!!";
        strength.style.color="red";
      }else if(passwordValue.length==10){
        strength.innerHTML="Password is medium!!";
        strength.style.color="orange";
        
      }
      else if(strongRegex.test(passwordValue)){
        strength.innerHTML="Password is strong!!";
        strength.style.color="green";
      }

	}
   
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirm Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
    var atSymbol=email.indexOf("@");
    if(atSymbol<1) return false;
    var dot=email.indexOf(".");
    if(dot<=atSymbol+2) return false;
	// return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    return /^([A-Za-z0-9\.-]+)@([A-Za-z\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/.test(email);

}

function isMobile(mobile){
return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mobile);
}

function isPassword(password){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    
    
}


          










