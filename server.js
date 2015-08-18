var express = require('express'),
    app = express(),
    router = express.Router(),
    config = require('./server/configure');

    //to keep the server looking light, I put everything through a configure module.
    app.set('port', process.env.PORT || 4500 );
    config(app);

    app.listen(app.get('port'), function(){
      console.log("Server has started and is listening on %s", app.get('port'));
    });
