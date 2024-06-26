var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose  = require('mongoose')

var indexRouter = require('./routes/Home_Page');
var usersRouter = require('./routes/users');
// var LoginRoute = require('./routes/login');
var AcademicsRoute = require('./routes/Academics');
var AdmissionsRoute = require('./routes/Admissions');
var EventsAndNewsRoute = require('./routes/Events_and_News');
var GalleryRoute = require('./routes/Gallery');
var OnlineResourcesRoute = require('./routes/Online_Resources');
var SocialMediaIntegrationRoute = require('./routes/Social_Media_Integration');
var StudentsAndParentsRoute = require('./routes/Students_and_Parents');
var TeacherCournerRoute = require('./routes/Teacher_Corner');



var app = express();

require('dotenv').config({ path:__dirname + '/.env'})
mongoose.connect(process.env['DATABASE'])



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/',LoginRoute);
app.use('/Academics',AcademicsRoute);
app.use('/Admissions', AdmissionsRoute);
app.use('/EventsAndNews',EventsAndNewsRoute);
app.use('/Gallery',GalleryRoute);
app.use('/Online/Resources',OnlineResourcesRoute);
app.use('/SocialMediaIntegration',SocialMediaIntegrationRoute);
app.use('/StudentsAndParents',StudentsAndParentsRoute);
app.use('/TeacherCorner',TeacherCournerRoute);

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
