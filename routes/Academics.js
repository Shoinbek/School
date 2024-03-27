var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Programs', function(req, res, next) {
  res.render('Academics/Academics');
});

router.get('/Success/Programs', function(req, res, next) {
  res.render('Academics/Success_Programs');
});


router.get('/Registrars', function(req, res, next) {
  res.render('Academics/Registrars');
});
module.exports = router;
