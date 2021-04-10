// Way 2 - Asynchronously

const httpObject = require("http");

const serverObject = httpObject.createServer(function requestHandler(req, res)
{
    console.log("New Connection");
    res.writeHead(200, {"content-type":"text/html"});
    res.write("Server Created Asynchronously");
    res.write("<br/>Welcome to Server-side Programming");
    res.end();
}).listen(2600);

console.log("Server is Running on Port No 2600...");