var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/FormSubmission', function(req, res, next) {
  res.render('register/IGCSE', { title: 'Express' });
});




module.exports = router;
