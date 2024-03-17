var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Gallery', function(req, res, next) {
  res.render('Gallery');
});

module.exports = router;
