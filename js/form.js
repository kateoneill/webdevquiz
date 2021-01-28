
var username = document.getElementById('contactname');
username.addEventListener('blur', validateName, false);

function validateName(){
	var nameMsg=document.getElementById('feedback');
	if(this.value.length>35){
		nameMsg.innerHTML = '<i class="exclamation icon"></i>Too long, name must be less than 35 characters';
		this.value="";
		this.focus();
	}
		else{
			nameMsg.innerHTML = '';
		}
}



 function verifyAge(signup){
    if (signup.ageverify.checked == false) 
    {
        alert('You must verify that you are 16!');
       return false
    } 
	else{
		return true;
	}
}






