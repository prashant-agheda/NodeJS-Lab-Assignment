/*
    Name: Prashant Agheda
    PRN No: 20180201001

    20. Create a node.js file that Insert Multiple Records in  "student" table,
        and display the result object on console.
*/

var mysql = require("mysql");

var connectionObject = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlrootpass",
    port: "3306",
    database: "nodejs",
    table: "student"
});

connectionObject.connect(function(err) {
    if(err)
    {
        console.log("Error Connecting to Database");
    }
    else
    {
        console.log("Connected to Database...");

        // Displaying Table BEFORE Inserting Multiple Values
        var sqlQuery = "SELECT * from student;";
        connectionObject.query(sqlQuery, function(err, result){
            if(err)
                throw err;
            else
                console.log("Table BEFORE Inserting Multiple Values is as follows:");
                console.log(result);
        });

        // Inserting Multiple Records
        var sqlQuery = "INSERT into student values ?;";
        var records = [
            [ 1002, "Robert", "Texas" ],
            [ 1003, "Robin", "Goa" ],
            [ 1004, "Kevin", "Mumbai" ],
            [ 1005, "Josh", "New York" ],
            [ 1006, "Lucy", "Los Angeles" ],
            [ 1007, "Kyle", "USA" ],
            [ 1008, "Samuel", "Florida" ],
            [ 1009, "Jessica", "San Francisco" ],
            [ 1010, "Shawn", "Nevada" ],
        ];
        connectionObject.query(sqlQuery, [records], function(err, result){
            if(err)
            {
                console.log("Failed to Insert the Data due to", err);
            }
            else
            {
                console.log("Multiple Records Inserted...");
                console.log("Number of Rows Affected =", result.affectedRows);
            }
        });

        // Displaying Table AFTER Inserting Multiple Values
        var sqlQuery = "SELECT * from student;";
        connectionObject.query(sqlQuery, function(err, result){
            if(err)
                throw err;
            else
                console.log("Table AFTER Inserting Multiple Values is as follows:");
                console.log(result);
        });
    }
});