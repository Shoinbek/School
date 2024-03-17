var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Admissions', function(req, res, next) {
  res.render('Admissions');
});

router.get('/Admissions/Tour', function(req, res, next) {
  res.render('TourSignUpSheet');
});

module.exports = router;
