var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Events_and_News', function(req, res, next) {
  res.render('Events_and_News');
});

module.exports = router;
