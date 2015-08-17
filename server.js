var express = require('express'),
    app = express(),
    router = express.Router();

    app.set('port', process.env.PORT || 4500 );

    router.get('/', function(req,res){
      res.json({
        'message': 'YO YO YO YO'
      });
    });

    app.use('/', router);

    app.listen(app.get('port'), function(){
      console.log("Server has started and is listening on %s", app.get('port'));
    });
