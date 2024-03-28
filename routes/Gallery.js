var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/SchoolEvents', function(req, res, next) {
  res.render('Gallery/School_Events');
});

router.get('/StudentArtwork', function(req, res, next) {
  res.render('Gallery/Student_Artwork');
});

router.get('/SportsHighlights', function(req, res, next) {
  res.render('Gallery/Sports_Highlights');
});

router.get('/CampusFacilities', function(req, res, next) {
  res.render('Gallery/Campus_Facilities');
});

router.get('/SubmitYourPhoto', function(req, res, next) {
  res.render('Gallery/Submit_Your_Photo');
});
module.exports = router;
