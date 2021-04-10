/*
    Name: Prashant Agheda
    PRN No: 20180201001

    15. Create a Node.js file that opens the requested file and returns the content
        to the client. If anything goes wrong, throw a 404 error.
*/

var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {

  var query = url.parse(req.url, true);

  var fileName = "." + query.pathname;

  fs.readFile(fileName, function(err, data) {
    if (err)
    {
      res.writeHead(404, {"Content-Type": "text/html"});
      return res.end("404 Not Found");
    }
    else
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    }
  });
}).listen(2600);

console.log("Server Running at Port No 2600...");