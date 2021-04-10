/*
    Name: Prashant Agheda
	PRN No: 20180201001

	12. WAP in node.js to accept the name of file dynamically and displays its entire information.
*/

const fs = require("fs");
const prompt = require("prompt-sync")();

var fileName = prompt("Enter the File Name: ");

fs.stat(fileName, function(err, stats){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("\nDetails of File are \n");
        console.log(stats);
        console.log("Is File =", stats.isFile());
        console.log("Is Directory =", stats.isDirectory());
        console.log("Is FIFO =", stats.isFIFO());
    }
});