/*
    Name: Prashant Agheda
    PRN No: 20180201001

    21. Create a node.js file that Select all records from the "customers"
        table, and delete the specified record.
*/

var mysql = require("mysql");

var connectionObject = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlrootpass",
    port: "3306",
    database: "google",
    table: "customers"
});

connectionObject.connect(function(err) {
    if(err)
    {
        console.log("Error Connecting to Database");
    }
    else
    {
        console.log("Connected to Database...");

        // Displaying Table Records BEFORE Deleting Record
        var sqlQuery = "SELECT * from customers;";
        connectionObject.query(sqlQuery, function(err, result){
            if(err)
                throw err;
            else
                console.log("Table BEFORE Deleting Record is as follows:");
                console.log(result);
        });

        // Deleting Record from Database
        var sqlQuery = "DELETE from customers WHERE customers.name = 'Robin';";
        connectionObject.query(sqlQuery, function(err, result){
            if(err)
                throw err;
            else
                console.log("Record Deleted...");
                console.log(result);
                console.log("Number of Rows Affected =", result.affectedRows);
        });

         // Displaying Table Records AFTER Deleting Record
         var sqlQuery = "SELECT * from customers;";
         connectionObject.query(sqlQuery, function(err, result){
             if(err)
                 throw err;
             else
                 console.log("Table BEFORE Deleting Record is as follows:");
                 console.log(result);
         });
    }
});