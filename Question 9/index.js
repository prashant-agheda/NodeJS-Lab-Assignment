/*
    Name: Prashant Agheda
	PRN No: 20180201001

	9. WAP in node.js to create package.json file. Also edit the
       description,author of package.json file.
*/

console.log("\n Edited Description and Author in package.json file :) \n");

var jsonFile = require("./package.json");

console.log("Details of package.json File are :", jsonFile);