var express = require('express');
    router = express.Router();

//add in controllers
var Users = require('../controllers/users');

//Let them know they are using the api
router.get('/', function(req, res){
  res.status(200).json({
    'message': 'You\'re at the base route for api v1'
  })
});

//get and list the users
router.get('/users', Users.list());

module.exports = router;
