var express 	= require('express');
var app 		= express();

app.get('/', function(req, res){
	res.send("Go to >> <a href='/login'> LOGIN </a>");
});


app.listen(3333, function(){
	console.log('Express HTTP Server\nStarted At Port: 3333');
});
