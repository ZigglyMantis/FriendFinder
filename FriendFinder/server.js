//===================================================
// Dependencies
// NPM packages that allow more useful functionality
//===================================================
const express = require("express")
var mysql = require("mysql");
//===================================================
// Configure Express Server
//===================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "quotes_db"
  });
// creating an 'express' server
var app = express();

// sets up the port the server will use and listen on
var PORT = process.env.PORT || 8080;

// allows express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//====================================================
// Router with routes
//====================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//====================================================
// Listener starts the server
//====================================================

app.listen(PORT, function() {
    console.log("Server running on port: " + PORT);
});
