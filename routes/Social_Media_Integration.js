var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Facebook', function(req, res, next) {
  res.render('Social_Media_Integration/Facebook');
});

router.get('/Instagram', function(req, res, next) {
  res.render('Social_Media_Integration/Instagram');
});

router.get('/LinkedIn', function(req, res, next) {
  res.render('Social_Media_Integration/LinkedIn');
});

router.get('/Pinterest', function(req, res, next) {
  res.render('Social_Media_Integration/Pinterest');
});

router.get('/Twitter', function(req, res, next) {
  res.render('Social_Media_Integration/Twitter');
});

router.get('/YouTube', function(req, res, next) {
  res.render('Social_Media_Integration/YouTube');
});

module.exports = router;
