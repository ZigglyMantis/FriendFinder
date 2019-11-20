// require the data
var friendData = require("../data/friends");

//routing

module.exports = function(app){
    //this sends a get request to display the friends
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res){
        res.json(friendData)
        console.log(res)
        console.log(req.body)
    });
};