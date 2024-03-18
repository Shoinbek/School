var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Admissions');
});

router.get('/Tour', function(req, res, next) {
  res.render('TourSignUpSheet');
});

// Server side validation
router.post('/TourSignUp', function(req, res, next){
  if(req.body.firstname === '' || req.body.lastname === '' || req.body.email === '' || req.body.phone === '' ||
  req.body.tourDataTime === '' || req.body.areaOfInterest === '') {
    res.send('Please fill out all fields before signing up.');
  }

  console.log(req.body.firstname);
  console.log(req.body.lastname);
  res.render('TourSignUpMembers', {
    firstname: req.body.firstname,
    lastname: req.body.lastname

  });
});



module.exports = router;
