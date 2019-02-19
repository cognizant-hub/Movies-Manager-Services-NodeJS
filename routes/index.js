var express = require('express');
var Router = express.Router();

// Redirect to index.html for all calls to root
Router.get ('/', function(req, res, next) {
   res.render ('index');
});

module.exports = Router;
