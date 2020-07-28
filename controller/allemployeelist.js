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
    var popup = require('popups');
    popupS.window({
      mode: 'alert',
      content: 'Deleted'
    });
		//alert("Deleted....");
	}
});


module.exports = router;
