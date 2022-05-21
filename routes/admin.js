var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/add', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    if (email=='admin@gmail.com' && password=='1234') {
        
        res.redirect('/admin/admin');
    }else{
        res.render('login');
    }
    
  });
router.get('/admin', function (req, res, next) {
    knex('magicinfo').select("*").then(result => {
      console.log('result')
      res.render('admin', { result: result })
    })
  });

module.exports = router;
