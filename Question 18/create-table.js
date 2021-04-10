// Importing mysql module
var mysql = require("mysql");

var connectionObject = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlrootpass",
    port: "3306",
    database: "library"
});

connectionObject.connect(function(err) {
    if(err)
    {
        console.log("Error Connecting to Database");
    }
    else
    {
        console.log("Connected to Database...");

        var sqlQuery = "CREATE TABLE book(Id int primary key not null, Name varchar(20) not null, Author varchar(30) not null);";
        connectionObject.query(sqlQuery, function(err){
            if(err)
                throw err;
            else
                console.log("Table 'book' Created inside 'library' Database...");
        });
    }
});