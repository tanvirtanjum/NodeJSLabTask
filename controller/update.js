var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('admin/allemployeelist/update/index');
});

module.exports = router;
