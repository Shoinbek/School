var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Online_Resources', function(req, res, next) {
  res.render('Online_Resources');
});

module.exports = router;
