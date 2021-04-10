/*
    Name: Prashant Agheda
	PRN No: 20180201001

	13. WAP in node js script to interact with the filesystem, and serve a web page from a file.
*/

const fs = require("fs");
const http = require("http");

var fileData = fs.readFileSync("modules.txt", "utf-8");

function requestHandler(request, response)
{
    response.writeHead(200, {"content-type":"text/plain"});

    response.write("Server Created...");
    response.write("\n\nContents of File are as follows:\n\n");
    response.write(fileData);;

    response.end();
};

const serverObject = http.createServer(requestHandler);
serverObject.listen(2600);
console.log("Server is Running on Port No 2600...");