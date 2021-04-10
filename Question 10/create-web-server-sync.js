/*
    Name: Prashant Agheda
	PRN No: 20180201001

	10. WAP in node.js to create webserver and display “Welcome to Server-side programming” on browser.
*/

// Way 1 - Synchronously

const httpObject = require("http");

function requestHandler(request, response)
{
    response.write("Server Created Synchronously");
    response.write("\nWelcome to Server-side Programming");
    response.end();
}

const serverObject = httpObject.createServer(requestHandler);
serverObject.listen(2600);
console.log("Server is Running on Port No 2600...");