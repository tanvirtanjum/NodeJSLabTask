var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('admin/addemployee/index');
});

router.post('/', function(req, res)
{

	if(req.body.uname == 'a' && req.body.password == 'a')
  {
		res.redirect('/admin');
	}

  else if(req.body.uname == 'e' && req.body.password == 'e')
  {
		res.redirect('/employee');
	}

  else
  {
		res.send('Invalid Username/Password');
	}

});

module.exports = router;
