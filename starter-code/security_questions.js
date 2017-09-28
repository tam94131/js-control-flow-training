console.log("security_questions.js loaded");

var securityQuestions = [ 
	{question: "What was your first pet's name?", expectedAnswer: "Fido"},
	{question: "What is your favorite color?", expectedAnswer: "red"},
	{question: "What is your mother's maiden?", expectedAnswer: "Smith"}	
] 

var success = true;
for (var i=0; i < securityQuestions.length; i++) {
	var answer = window.prompt (securityQuestions[i].question);
	if (answer != securityQuestions[i].expectedAnswer) {
		alert("Sorry doesn't match");
		success = false;
		break;
	} 
}

if (success===true) {
	alert("You did it!");
}