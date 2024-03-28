var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ClassroomPortals', function(req, res, next) {
  res.render('Online_Resources/Classroom_Portals');
});

router.get('/EducationalWebsites', function(req, res, next) {
  res.render('Online_Resources/Educational_Websites');
});

router.get('/LibraryDatabases', function(req, res, next) {
  res.render('Online_Resources/Library_Databases');
});

router.get('/OnlineTutorials', function(req, res, next) {
  res.render('Online_Resources/Online_Tutorials');
});

router.get('/ParentGuides', function(req, res, next) {
  res.render('Online_Resources/Parent_Guides');
});

router.get('/TeacherResources', function(req, res, next) {
  res.render('Online_Resources/Teacher_Resources');
});

module.exports = router;
