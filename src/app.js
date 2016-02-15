'user strict';
var posts = require('./mock/posts.json');

var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("<h1>hello there</h1>");

});

app.get('/blog/:title?', function(req,res){
	var title = req.params.title;
	if (title === undefined){
		res.status(503);
		res.send("This page is under construction.");
	}else{
		var post = posts[title];
		console.log(post);
		res.send(post);
	}
	
})

app.listen(8888, function(){
	console.log("Front end server running");
});