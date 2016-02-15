'user strict';
var posts = require('./mock/posts.json');

var express = require('express');
var app = express();

app.use('/static',express.static(__dirname+'/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates/')

app.get('/', function(req,res){
	// res.send("<h1>hello there</h1>");
	res.render('index');
});

app.get('/blog/:title?', function(req,res){
	var title = req.params.title;
	if (title === undefined){
		res.status(503);
		res.send("This page is under construction.");
	}else{
		var post = posts[title] || {};
		console.log(post);
		res.render('post', {'post':post});
		
	}
	
})

app.listen(8888, function(){
	console.log("Front end server running");
});