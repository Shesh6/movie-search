var express = require("express");
var app = express();
var request = require("request");
// var bs = require("bootstrap");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
   res.render("home"); 
});

app.get("/results",function(req,res){
    var query = req.query.title;
    var url = "https://www.omdbapi.com/?s="+query+"&apikey=thewdb";
    request(url, function(error,response,body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Move Search Started");
});

/!-- &apikey=thewdb --/