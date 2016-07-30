var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var util = require('./src/util.js');
var storage = require('./models/storage.js');
var view = require('./src/view.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/views/index.html') ;
});

app.post('/new', function(req, res) {
    var url = req.body.url;
    res.set('Content-Type', 'text/html');
    storage.addURL(url);
    
    
});

app.get('/:id', function(req, res) {
   var id = req.params.id;
   storage.getURL(id).then(function(url) {
      if(!url) {
          res.end('404 Not Found');
          util.log("[SNIP] 404 Not Found", "yellow");
      } else {
          util.log("[SNIP] User redirected from /" + id, "green");
      }
   });
});

app.listen(process.env.PORT, function (req, res) {
    util.log("[SNIP] Listening", "green");
});