var express 	= require('express');
var bodyParser 	= require('body-parser');

var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
var employee 		= require('./controller/employee');

var app 		= express();



//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser());
app.use('/login', login);
app.use('/EmployeeDashBoard', admin);
app.use('/EmployeeDashBoard', employee);

app.get('/', function(req, res)
{
	res.send("Go to >> <a href='/login'> LOGIN </a>");
});


app.listen(3333, function()
{
	console.log('Express HTTP Server\nStarted At Port: 3333');
});
