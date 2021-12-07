var express = require("express");
var axios = require('axios')
var request = require("request");
const { response } = require("express");
var app = express();
var port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get('/',(req,res)=>{
    axios.get('https://v2.jokeapi.dev/joke/Any')
    .then(resp=>{
        const data = resp.data;
        console.log(data);
        res.render("getJokes",{data:data})
    })
    .catch(err=>{
        console.log(err);
    })
})


app.listen(port, function() {
   console.log("Server Started!");
});