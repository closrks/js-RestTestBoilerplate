
/**
 * Module dependencies.
 */

var express = require('express')
  , sample = require('./routes/sample.route')
  , http = require('http')
  , path = require('path');


var dbHost = 'localhost';
var dbPort = 27017;
sample = sample.CreateSampleRoutes(dbHost, dbPort)
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/sample', sample.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
