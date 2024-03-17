var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Social_Media_Integration', function(req, res, next) {
  res.render('Social_Media_Integration');
});

module.exports = router;
