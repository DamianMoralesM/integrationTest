 
const firebase = require('firebase');

const admin = require('firebase-admin');
const functions = require('firebase-functions');
const  serviceAccount = require('./keys').serviceAccount;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://agilesapp-bf9e7.firebaseio.com'
  });

  const db = admin.firestore();
  
  
  
var express = require('express');
var app = express();
// Initialize Passport and restore authentication state, if any, from the
// session.
var session = require("express-session");



var engines = require('consolidate');

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');


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

   app.get('/login3', function(req, res) {
     res.render('login3');  
  });

  app.get('/login', function(req, res) {
    res.render('login'); 
  });

 app.get('/dashboard', function(req, res) {
   
    res.render('dashboard'); 
  });
  
  app.post('/votes' , function(req, res){
    
    db.collection('votos').add({
      usuario: req.body.usuario,
      fecha: "",
      rubros: {
        bateria: req.body.bateria,
        comparsa: req.body.comparsa,
        reina: req.body.reina

        }
  });
  res.send('Tu voto fue ' + ' bateria: ' + req.body.bateria +' comparsa:' +  req.body.comparsa +' reina: '+ req.body.reina);
  });


  app.get('/comparseros', function(req,res){

      res.render('comparseros');

  })
  app.get('/tester', function(req, res){
      let aux = [];
      db.collection('users').where('id','==','2').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          aux.push(doc.data());
       
        });

        res.send(aux);
      })
      .catch((err) => {
        console.log('Error getting documents', err);


      });


  });


 


   exports.app = functions.https.onRequest(app);
