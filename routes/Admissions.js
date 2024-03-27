var express = require('express');
var router = express.Router();
const TourSignUpMembers = require('../models/tour-members');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Admissions/Admissions');
});

router.get('/Tour', function(req, res, next) {
  res.render('Admissions/TourSignUpSheet');
});

router.get('/TourSignUpMembers', async function(req, res, next) {
  try {
    const TourMembers = await TourSignUpMembers.find();
    // console.log('TourMembers:', TourMembers);
    res.render('Admissions/TourSignUpMembers', { TourMembers: TourMembers }); // Pass TourMembers to the template
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
    res.set('Cache-Control', 'no-cache'); // Add this line to disable caching
    res.json(tourMembers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/tour-state-AreaOfInterest-data', async function(req, res, next) {
  try {
    const statesAreasOfInterest = await TourSignUpMembers.aggregate([
      { $group: { _id: "$state", areasOfInterest: { $addToSet: "$areaOfInterest" } } }
    ]);
    res.json(statesAreasOfInterest);
    // console.log(statesAreasOfInterest) Data is getting fetched from DB
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/Process', function(req, res, next) {
  res.render('Admissions/Admission_Process');
});

router.get('/ApplicationForm', function(req, res, next) {
  res.render('Admissions/Application_Form');
});

router.get('/EntryRequirements', function(req, res, next) {
  res.render('Admissions/Entry_Requirements');
});

router.get('/ImportantDates', function(req, res, next) {
  res.render('Admissions/Important_Dates');
});


router.get('/TuitionAndFees', function(req, res, next) {
  res.render('Admissions/Tuition_And_Fees');
});

router.get('/Contacts', function(req, res, next) {
  res.render('Admissions/Contact_Admissions');
});









module.exports = router;
