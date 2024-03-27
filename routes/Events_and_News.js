var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Upcoming/Events', function(req, res, next) {
  res.render('Events_And_News/Events_And_News');
});

router.get('/Updates', function(req, res, next) {
  res.render('Events_And_News/Updates');
});

router.get('/Newsletter/Archive', function(req, res, next) {
  res.render('Events_And_News/Newsletter_Archive');
});

router.get('/School/Announcements', function(req, res, next) {
  res.render('Events_And_News/School_Announcements');
});

router.get('/SportsAndActivities', function(req, res, next) {
  res.render('Events_And_News/Sports_And_Activities');
});

module.exports = router;
