console.log("sing.js loaded");

var lines = ["5 bottles of beer on the wall",
"5 bottles of beer!", 
"Take on down and pass it around,",
"4 bottles of beer on the wall"];

var numb = window.prompt("How many beers?")

for (var i=0; i<numb; i++) {
	console.log(numb-i + " bottles of beer on the wall");
	console.log(numb-i + " bottles of beer");
	console.log("Take it down and pass it around");
}