console.log("sing.js loaded");

var lines = ["5 bottles of beer on the wall",
"5 bottles of beer!", 
"Take on down and pass it around,",
"4 bottles of beer on the wall"];

var numb = window.prompt("How many lines?")
If (numb>lines.length) {
	numb = lines.length;
}

for (var i=0; i<lines.length; i++) {
	console.log(lines[i]);
}