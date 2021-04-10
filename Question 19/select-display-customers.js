/*
    Name: Prashant Agheda
    PRN No: 20180201001

    19. Create a node.js file that Select all records from the "customers"
        table, and display the result object on console.
*/

var mysql = require("mysql");

var connectionObject = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlrootpass",
    port: "3306",
    database: "google",
});

connectionObject.connect(function(err) {
    if(err)
    {
        console.log("Error Connecting to Database");
    }
    else
    {
        console.log("Connected to Database...");

        var sqlQuery = "SELECT * from customers;";
        connectionObject.query(sqlQuery, function(err, result){
            if(err)
                throw err;
            else
                console.log("Result Object", result);
        });
    }
});