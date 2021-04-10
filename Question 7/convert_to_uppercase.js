/*
    Name: Prashant Agheda
	PRN No: 20180201001

	7. Create a Node.js file that will convert the output "Hello World!" into upper-case letters
*/

var uppercaseModule = require("upper-case");
var string = "Hello World!";
console.log("\nOriginal String =", string);

var convertedString = uppercaseModule.upperCase(string);
console.log("\nConverted Upper Case String =", convertedString, "\n");