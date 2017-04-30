// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//     port: 8889,
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "burgers_db"
// });

var connection = mysql.createConnection({
    host: "otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    username: "tg3csbsz2bgcwb8u",
    password: "ryb14zkn4gq9blo",
    database: "o9b1heo501uf8w8d",
    port: 3306
});


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