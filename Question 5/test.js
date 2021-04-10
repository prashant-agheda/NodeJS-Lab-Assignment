// Importing "msg.js" "fun.js" and "obj.js"
var prime = require("./fun.js");
var message = require ("./msg.js");
var object = require("./obj.js");

console.log("\nExecuting fun.js, msg.js & obj.js in test.js file...");

prime.is_prime(35);
console.log("My University Name :", message);
console.log("Object Details are :", object);