/*
    Name: Prashant Agheda
    PRN No: 20180201001

    18. Create a Node.js file that demonstrate create Database and Table in MySQL.
*/

var mysql = require("mysql");

var connectionObject = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlrootpass",
    port: "3306",
});

connectionObject.connect(function(err) {
    if(err)
    {
        console.log("Error Connecting to Database");
    }
    else
    {
        console.log("Connected to Database...");

        var sqlQuery = "CREATE DATABASE Library;";
        connectionObject.query(sqlQuery, function(err){
            if(err)
                throw err;
            else
                console.log("Database 'Books' Created Successfully...");
        });
    }
});