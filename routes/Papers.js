var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/IGCSE', function(req, res, next) {
  res.render('Papers/IGCSE', { title: 'Express' });
});

router.get('/A-LEVEL', function(req, res, next) {
  res.render('Papers/A-LEVEL', { title: 'Express' });
});



module.exports = router;
