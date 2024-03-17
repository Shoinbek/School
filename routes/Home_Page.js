var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home_Page', function(req, res, next) {
  res.render('Home_Page', { School: 'Insightful Horizon' });
});

module.exports = router;
