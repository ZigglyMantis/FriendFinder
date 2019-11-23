// ===============================================================================
// DEPENDENCIES
// include the path package to get the correct file path for the html
// ===============================================================================
var path = require("path")

// ===============================================================================
// Routing
// ===============================================================================
module.exports = function(app){
// route taking the user to the home page/ default page user lands on.
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
// route taking the user to the survey page
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
// if no matching route name go back to home page
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}