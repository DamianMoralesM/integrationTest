 
const firebase = require('firebase');


  const admin = require('firebase-admin');
  const functions = require('firebase-functions');
  var serviceAccount = {
    "type": "service_account",
    "project_id": "agilesapp-bf9e7",
    "private_key_id": "3f06613baf5276665fb3360206894fcc6520bddc",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC66xclw9jh4eBF\nV8iPHz58TsGRYHYzpgGRX69CSghYWabQjZZHM8PORmnYIELCpJVp6z8pqGbjllBF\n2nf7aeUqkTF8tibTODnenbUMbyevkYdYq5OEPnPAMRLFAPpZdtON+ltyhh3qT/bj\nxQeuIg2rWlp/ROsNZe+jFwUB/woJSUBWc0kVE3Gq+v2pAu9m/SO6wDLEOthscZSF\noYtOGKzFyIXEtd4hUo+siAh6Aomyfh767OqSNsyYVJ4nb62JtL3v+2B0/eBoCzI6\n9HOPAWjFjA5fgZkbBemRadmacKx7lHOWtBx2M4g4hAxUENitkGyC8X6Asp4d1csM\n9vl2FBeDAgMBAAECggEAEzxrYusPUFu3AVvh23zLKO7P896Z+4G7ipLuzeMhjboY\nNUFE9Gnq3jkX3nKffDmE2OQpWWenwwculqm/jEOfHmzXy25Re44/Ql43iiKMUoCn\nDaSGp2bn8aD7PgP2P6u/ZM6dh6EuxfTZwyH9QtnlTzuasZtNl1DkwwN08/ojtcXD\nCNXHl020d8WcAUdD6LhjBiBP7IBz+zL6NYfdKPFUFFz3rZm3SIgUrT+5732PNTwa\nKxvRjX17bCxp3oGk5D69R+9Wrn9j+qiYURXkdQLxS/reL5VE/7gEG5AUqnQqB0tr\n3HL+t9M+tbOU7h7+wMn1dJ+HOJIaH+v0l9HlWyYRMQKBgQD+2dUDoqH3+WZW4M2n\nYsIc3/wcKls9GAQEzuPqgD/s+OacYYxGfEj68iDp9fhrj5py9lkxTB/T+WK5zKCz\nFfHNCN8faMYpoBueIeCgCKTTyUth5vsUzwwAR40zcNi8QbmrTfDc2EEUoHMKb67W\n3dD18hOa10WzfkPQ83rJT32dcwKBgQC7wthxZd5JkLUEp1PFxKRAvP66zzn7kEmZ\nyoNzt/vle/ToUm1x1IurkM5HZ/Oe6ahZW9v8yY1OEyfw4i5eJmtfoqG0ujpkDVsr\nC6bZvAR48C0U6TO60n6nKikpUjHfge/EPypBzmtcnPiFLVuUArJqaqUS5TbW7D1y\nTGeW/j4ZsQKBgAOhyx1gJfrIvSKj1Yp7J9UNhCRKnj5Cp1wCLtFavo58BZ1Y7oza\nnJem970d2kp+I29b/21qblGxDi0js26Z83Y+mB90eM6DD6GzTeY5+U9jYQWmKxHi\n2YLvgh2nkA8uyJyeYb5j/plyp/EQImfBhYbbyle8lau3MvQ5ZBiWX23tAoGAE2Ds\nzedhpd4VkMFkWAkPms7my4kPxvMBZaoNHyhiCzFb+Y5oVVNGhxKO97e24TPkeDSO\n4+w5dVFs0ePGPVlhw6EZZ3nBBQqL2kl9kwNgwsqnHH1lJWcMQ1yKmwUsuJDEmlCa\nn+gaFJju3W/s/723hFw1ZVna6xu+y8ku99qNtkECgYA26OLEmbqE+YWuYUkoYtE+\n0ZDadeMyo2Yex2b0KouVunT3dK/0FO82zDWI69u2iHCdo+yA0qAxsz6fyPuLcc+u\nLvM+i6GSdisMCA2/QIOWvRm/G3W03QZHxWyH2BaZ3xv9IDdkG6v4WpDCUCdAvU2i\n5LysTqa3ndq3j5y70NLMTQ==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-7g83g@agilesapp-bf9e7.iam.gserviceaccount.com",
    "client_id": "110419244491772585865",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7g83g%40agilesapp-bf9e7.iam.gserviceaccount.com"
  }
;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://agilesapp-bf9e7.firebaseio.com'
  });

  const db = admin.firestore();
  
  
var express = require('express');
var app = express();
var engines = require('consolidate');

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

   app.get('/login2', function(req, res) {
     res.render('login2');  
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

   exports.app = functions.https.onRequest(app);
