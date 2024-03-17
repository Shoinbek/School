var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Students_and_Parents', function(req, res, next) {
  res.render('Students_and_Parents');
});

module.exports = router;
