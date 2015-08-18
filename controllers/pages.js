/*
  Lets simulate a database and prtend our models are doing their jobs
*/

//Lets pull in our models.
var Models = require('../models');

var pages = {
  home: function() {
    return function(req,res) {
      Models.Pages.home(function(err, data){
        if (err) { console.log(err);};
        var home = {};
        home.page = data;
        res.render('index.html', home);
      });
    }
  }
}

module.exports = pages;
