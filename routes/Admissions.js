var express = require('express');
var router = express.Router();
const TourSignUpMembers = require('../models/tour-members');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Admissions');
});

router.get('/Tour', function(req, res, next) {
  res.render('TourSignUpSheet');
});

router.get('/TourSignUpMembers', async function(req, res, next) {
  try {
    const TourMembers = await TourSignUpMembers.find();
    // console.log('TourMembers:', TourMembers);
    res.render('TourSignUpMembers', { TourMembers: TourMembers }); // Pass TourMembers to the template
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/tour-members-data', async function(req, res, next) {
  try {
    const tourMembers = await TourSignUpMembers.find();
    res.json(tourMembers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/tour-AreaOfInterest-data', async function(req, res, next) {
  try {
    const tourMembers = await TourSignUpMembers.find();
    res.json(tourMembers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
