var express = require("express");
var request = require("request");
var app = express();
var port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    request("https://sv443.net/jokeapi/category/Any", function(err, response, body) {
        if(err) {
            console.log(err);
        } else {
            data = JSON.parse(body);
            res.render("getJokes",{data: data});
        }
    })
});


app.listen(port, function() {
   console.log("Server Started!");
});