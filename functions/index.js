var  functions = require('firebase-functions');
var express = require('express');
var app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var engines = require('consolidate');



// Register '.mustache' extension with The Mustache Express
app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

var courses =[
  {
     name:"English",
     id:1
  },
  {
     name:"Math",
     id:2
  },
  {
     name:"Programming",
     id:3
  },
  {
    name:"Chemestry",
    id:4
 }
 

];





//routes
app.get('/shop', function(req, res) {
    
    res.render('shop',{   "title": "http://libu.s3.amazonaws.com/img/1026_9789871609789_alfa.jpg"  });
  });

  app.get('/test', function(req, res) {
    
    res.render('test');
  });
  app.get('/vote', function(req, res) {
    
    res.render('vote'); 
  
  });


  app.get('/courses', function(req, res) {
    res.type('application/json');
    res.send(courses);
  });

   exports.app = functions.https.onRequest(app);
