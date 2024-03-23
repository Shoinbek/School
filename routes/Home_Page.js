var express = require('express');
var router = express.Router();
const TourSignUpMembers = require('../models/tour-members');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home_Page');
});


router.post('/Admissions/TourSignUpMembers', async function(req, res, next){

  try{
    const Tour = new TourSignUpMembers ({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      tourDateTime: req.body.tourDateTime,
      areaOfInterest: req.body.areaOfInterest,
      state: req.body.state

    });
    await Tour.save();
    res.redirect('/Admissions/TourSignUpMembers');
  } catch (err){
    console.log(err);
    res.status(500).send('Failed to create a new patient')
  }
});


module.exports = router;
