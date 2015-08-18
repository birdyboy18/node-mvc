/*
  There isn't actually a database being used, but imagine there is.
*/

//Lets pull in our models.
var Models = require('../models');


var Users = {
  list: function() {
    return function(req,res) {
      //lets simulate if it was a database lookup and have it return as a callback
      Models.Users.get(function(err, users){
        if (err) { console.log(err);};

        res.status(200).json(users);
      });
    }
  }
}

module.exports = Users;
