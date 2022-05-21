var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.post('/add', function(req, res, next) {
  setTimeout(AddFynction, 7000)
function AddFynction(){

  var districts =req.body.districts;
  var wanumber = req.body.wanumber;
  knex('magicinfo').insert({districts:districts, mobnumber:wanumber}).then(result => {
    console.log(result);
    res.redirect('/users/index');
  }).catch(error => { console.log(error); })
}  
});


module.exports = router;
