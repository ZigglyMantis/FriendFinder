// require the data
var friendData = require("../data/friends");

//routing

module.exports = function(app){
    //this sends a get request to display the friends
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });
    //this sends the post request to api/friends
    app.post("/api/friends", function(req, res){
        friendData.push(req.body)
        res.json(friendData)
    });
};