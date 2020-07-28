var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('login/index');
});

router.post('/', function(req, res)
{

	if(req.body.uname == req.body.password)
  {
		res.redirect('/admin');
	}

  /*else if(req.body.uname == req.body.password)
  {
		res.redirect('/employee');
	}*/

  else
  {
		res.send('Invalid Username/Password');
	}

});

module.exports = router;
