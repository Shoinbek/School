var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/CurriculumResources', function(req, res, next) {
  res.render('Teacher_Corner/Curriculum_Resources');
});

router.get('/ClassroomManagement', function(req, res, next) {
  res.render('Teacher_Corner/Classroom_Management');
});

router.get('/LessonPlans', function(req, res, next) {
  res.render('Teacher_Corner/Lesson_Plans');
});

router.get('/ProfessionalDevelopment', function(req, res, next) {
  res.render('Teacher_Corner/Professional_Development');
});

router.get('/StaffDirectory', function(req, res, next) {
  res.render('Teacher_Corner/Staff_Directory');
});

router.get('/TeacherWorkshops', function(req, res, next) {
  res.render('Teacher_Corner/Teacher_Workshops');
});
module.exports = router;
