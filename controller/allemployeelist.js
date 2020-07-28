var express = require('express');
//var popup = require('popups');
var router = express.Router();


router.get('/', function(req, res)
{
	res.render('admin/allemployeelist/index');
});

router.post('/', function(req, res)
{
	if(req.body.hasOwnProperty("upd"))
	{
		res.redirect('allemployeelist/update');
	}

	if (req.body.hasOwnProperty("dlt"))
	{
  	res.render('admin/allemployeelist/index');
	}
});


module.exports = router;
