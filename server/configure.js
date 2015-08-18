var nunjucks = require('nunjucks'),
    Routes = require('../routes.js');

module.exports = function(app) {

  //configure nunjucks, this is actually super easier. Way easier than Handlebars
  nunjucks.configure('views', {
    autoescape: false,
    express: app
  });

  //Init the routes
  Routes.init(app);

  app.set('json spaces', 2);

  return app;
}
