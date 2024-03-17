var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Teacher_Corner', function(req, res, next) {
  res.render('Teacher_Corner');
});

module.exports = router;
