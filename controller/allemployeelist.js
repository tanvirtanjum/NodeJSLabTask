var express = require('express');
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

	else if (req.body.hasOwnProperty("dlt"))
	{
		res.redirect('admin/allemployeelist');
	}
});


module.exports = router;
