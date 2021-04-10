/*
    Name: Prashant Agheda
	PRN No: 20180201001

	11. WAP in node.js to accept length and breadth dynamically from user and
        display area and circumference of rectangle on browser.
*/

// Importing Modules
const httpObject = require("http");
const prompt = require("prompt-sync")();        // We need instance of this so we are using ()

var length = Number(prompt("Enter Length of Rectangle: "));
var breadth = Number(prompt("Enter Breadth of Rectangle: "));

// Calculating Area and Circumference and Storing it into variables
var area = length * breadth;
var circumference = 2 * (length * breadth);

function requestHandler(request, response)
{
    response.write("Length of Rectangle = " + length);
    response.write("\nBreadth of Rectangle = " + breadth);
    response.write("\n\nArea of Rectangle = " + area);
    response.write("\nCircumference of Rectangle = " + circumference);

    response.end();
}

const serverObject = httpObject.createServer(requestHandler);
serverObject.listen(2600);
console.log("Calculations Done... Check Browser :)");
console.log("Server is Running on Port No 2600...");