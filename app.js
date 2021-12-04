var express = require("express");
var request = require("request");
var app = express();
var port = process.env.port || 3000;

require('dotenv').config();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    request(
        {method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
          'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
          'x-rapidapi-key': process.env.Jokes_API_KEY,
          useQueryString: true
        }
        }, function(err, response, body) {
        if(err) {
            console.log(err);
        } else {
            data = {
                body:JSON.parse(body).body[0],
                urlName:"dadJokes"
                };
            res.render("getJokes",{data: data});
        }
    })
});
app.get("/chuck", function(req, res) {
    request(
        {method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
          accept: 'application/json',
          'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.Jokes_API_KEY,
          useQueryString: true
        }}, function(err, response, body) {
        if(err) {
            console.log(err);
        } else {
            data = {
                body:JSON.parse(body),
                urlName:"chuckJokes"
            }
            res.render("getJokes",{data: data});
        }
    })
});

app.listen(port, function() {
   console.log("Server Started!");
});