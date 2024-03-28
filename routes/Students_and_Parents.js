var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/StudentHandbook', function(req, res, next) {
  res.render('Students_and_Parents/Student_Handbook');
});

router.get('/ExtracurricularActivities', function(req, res, next) {
  res.render('Students_and_Parents/Extracurricular_Activities');
});

router.get('/ParentalGuidance', function(req, res, next) {
  res.render('Students_and_Parents/Parental_Guidance');
});

router.get('/ParentTeacherAssociation', function(req, res, next) {
  res.render('Students_and_Parents/PTA');
});

router.get('/SchoolPolicies', function(req, res, next) {
  res.render('Students_and_Parents/School_Policies');
});

router.get('/StudentResources', function(req, res, next) {
  res.render('Students_and_Parents/Student_Resources');
});
module.exports = router;
