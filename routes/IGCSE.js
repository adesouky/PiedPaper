var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Papers/IGCSE', { title: 'Express' });
});

/////////////////////PHYSICS///////////////////////////////////////

router.get('/Physics', function(req, res, next) {
  res.render('IGCSE/physics', { title: 'Express' });
});

router.get('/Physicsp1o', function(req, res, next) {
  res.render('IGCSE/physics/p1o', { title: 'Express' });
});

router.get('/Physicsp3o', function(req, res, next) {
  res.render('IGCSE/physics/p3o', { title: 'Express' });
});

router.get('/Physicsp6o', function(req, res, next) {
  res.render('IGCSE/physics/p6o', { title: 'Express' });
});

router.get('/Physicsp2n', function(req, res, next) {
  res.render('IGCSE/physics/p2n', { title: 'Express' });
});

router.get('/Physicsp4n', function(req, res, next) {
  res.render('IGCSE/physics/p4n', { title: 'Express' });
});

router.get('/Physicsp6n', function(req, res, next) {
  res.render('IGCSE/physics/p6n', { title: 'Express' });
});


//////////////////////////////////BIOLOGY//////////////////////


router.get('/Biology', function(req, res, next) {
  res.render('IGCSE/biology', { title: 'Express' });
});



router.get('/Biologyp1o', function(req, res, next) {
  res.render('IGCSE/biology/p1o', { title: 'Express' });
});

router.get('/Biologyp3o', function(req, res, next) {
  res.render('IGCSE/biology/p3o', { title: 'Express' });
});

router.get('/Biologyp6o', function(req, res, next) {
  res.render('IGCSE/biology/p6o', { title: 'Express' });
});

router.get('/Biologyp2n', function(req, res, next) {
  res.render('IGCSE/biology/p2n', { title: 'Express' });
});

router.get('/Biologyp4n', function(req, res, next) {
  res.render('IGCSE/biology/p4n', { title: 'Express' });
});

router.get('/Biologyp6n', function(req, res, next) {
  res.render('IGCSE/biology/p6n', { title: 'Express' });
});



////////////////////////////////////////////////////////////////////
router.get('/Math', function(req, res, next) {
  res.render('IGCSE/math', { title: 'Express' });
});
router.get('/Mathp1o', function(req, res, next) {
  res.render('IGCSE/math/p1o', { title: 'Express' });
});

router.get('/Mathp3o', function(req, res, next) {
  res.render('IGCSE/math/p3o', { title: 'Express' });
});

router.get('/Mathp6o', function(req, res, next) {
  res.render('IGCSE/math/p6o', { title: 'Express' });
});

router.get('/Mathp2n', function(req, res, next) {
  res.render('IGCSE/math/p2n', { title: 'Express' });
});

router.get('/Mathp4n', function(req, res, next) {
  res.render('IGCSE/math/p4n', { title: 'Express' });
});

router.get('/Mathp6n', function(req, res, next) {
  res.render('IGCSE/math/p6n', { title: 'Express' });
});


////////////////////////////////////////////////
router.get('/Chemistry', function(req, res, next) {
  res.render('IGCSE/chemistry', { title: 'Express' });
});


router.get('/Chemistryp1o', function(req, res, next) {
  res.render('IGCSE/chemistry/p1o', { title: 'Express' });
});

router.get('/Chemistryp3o', function(req, res, next) {
  res.render('IGCSE/chemistry/p3o', { title: 'Express' });
});

router.get('/Chemistryp6o', function(req, res, next) {
  res.render('IGCSE/chemistry/p6o', { title: 'Express' });
});

router.get('/Chemistryp2n', function(req, res, next) {
  res.render('IGCSE/chemistry/p2n', { title: 'Express' });
});

router.get('/Chemistryp4n', function(req, res, next) {
  res.render('IGCSE/chemistry/p4n', { title: 'Express' });
});

router.get('/Chemistryp6n', function(req, res, next) {
  res.render('IGCSE/chemistry/p6n', { title: 'Express' });
});




module.exports = router;
