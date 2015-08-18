/*
  If you're looking at this file before looking at the users controller that one has a mongoose schema example.
*/

var Pages = {
  home: function(callback) {
    var data = {
      'title': 'Node MVC',
      'subTitle': 'Node MVC written using express and nunjucks',
      'content': 'This is a super simple setup that demonstrates the basic principles of MVC using node, it demonstrates using routers modularly and architecting your app in a way that makes it easier to scale in the future.'
    }

    callback(false,data);
  }
}

module.exports = Pages;
