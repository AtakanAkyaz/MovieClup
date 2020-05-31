var express = require("express");
var app = express();
var request=require("request");

app.get("/results" ,function(req,res){
	res.send("http://movieclup10.s3-website.us-east-2.amazonaws.com/Film1.html" , function(error,response,error){

	})
})

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Movie Clup has started");
})
