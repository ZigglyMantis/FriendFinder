//===================================================
// Dependencies
// NPM packages that allow more useful functionality
//===================================================
const express = require("express")
//===================================================
// Configure Express Server
//===================================================
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

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//====================================================
// Listener starts the server
//====================================================

app.listen(PORT, function() {
    console.log("Server running on port: " + PORT);
});
