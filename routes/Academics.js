var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Academics', function(req, res, next) {
  res.render('Academics');
});

module.exports = router;
