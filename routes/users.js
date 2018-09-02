var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User= require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/TeacherLogin', function(req, res, next) {
  res.render('users/Teacherlogin', { title: 'Express' });
});

router.get('/StudentLogin', function(req, res, next) {
  res.render('users/Studentlogin', { title: 'Express' });
});

router.get('/SignUp', function(req, res, next) {
  res.render('users/StudentSignup', { title: 'Express' });
});

router.post('/SignUp', function(req, res, next) {
  var Name = req.body.Name;
  var Phonenumber=req.body.Phonenumber;
  var Username=req.body.Username;
  var Groupname=req.body.Groupname;
  var Password=req.body.Password;

  req.checkBody('Name', 'Name is required').notEmpty();
  req.checkBody('Phonenumber', 'Phonenumber is required').notEmpty();
  req.checkBody('Username', 'Username is required').notEmpty();
  req.checkBody('Groupname', 'Groupname is required').notEmpty();
  req.checkBody('Password', 'Password is required').notEmpty();



  var errors= req.validationErrors();

  if(errors){
  	res.render('users/StudentSignup', {
  		errors:errors
  	});
  }
  else{
  	var newUser = new User({
  		Name: Name,
  		Phonenumber: Phonenumber,
  		Username: Username,
  		Groupname: Groupname,
  		Password: Password
  	});
  	User.createUser(newUser, function(err, user){
  		if(err){
  			throw err;
  		}
  		console.log(user.Phonenumber);
  	});
  	req.flash('success_msg' , 'Succesfully registered');

  	res.redirect('/users/StudentLogin');

  }
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.Password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post ('/StudentLogin',passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/StudentLogin', failureFlash: true }),
	function (req, res) {
		res.redirect('/');

});


router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/');
});

 


module.exports = router;
