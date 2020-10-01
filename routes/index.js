var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('sign_in');
});

router.get('/auth', function (req, res, next) {
  res.render('admin_page');
});

module.exports = router;
