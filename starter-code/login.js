console.log("login.js loaded");

var userLogin = {userName: "Tahl", password: "1234"};


var pwsuccess = false;
for (var x=0; x<3; x++) {
	var password = window.prompt("Enter password for user " + userLogin.userName);
	if (password===userLogin.password) {
		pwsuccess = true;
		break;
	}
}

if (pwsuccess===true) {
	alert("You're so cool!")
} else { 
	alert("Locked out of account due to excessive tries!");
}
