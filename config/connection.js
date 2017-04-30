// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//     port: 8889,
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "burgers_db"
// });

// var connection = mysql.createConnection({
//     host: "us-cdbr-iron-east-03.cleardb.net",
//     username: "b9ba06add5a856",
//     password: "6134dc83",
//     database: "heroku_c670864fcbd3802",
//     port: 3306
// });


connection.connect();

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;