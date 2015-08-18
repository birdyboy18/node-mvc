/*
Require in the routes as modules, express 4 seperates the routes from the app. Meaning they
can be added in as their own instances. This is really good for controlling api versions.
*/

//require in route modules
var mainRoutes = require('./routes/main');
var api = require('./routes/api');

//see how this is similar to the config function.
module.exports.init = function(app) {
  app.use('/', mainRoutes);
  app.use('/api/v1/', api);
};
