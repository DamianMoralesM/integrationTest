 
const firebase = require('firebase');


  const admin = require('firebase-admin');
  const functions = require('firebase-functions');
  var serviceAccount = {
    "type": "service_account",
    "project_id": "agilesapp-bf9e7",
    "private_key_id": "64a1c80978a10c945acd1c95df675e2ba957214b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDO+IDdTv17WDe6\nRa7extNRBKCvPWWy9RcQ3G7c9/cMDdVgN9IM7WUBDOAqY2d3+0cy9HP5Qj0cKqT9\nRj7lNOFBdI5Bs4QPTdNHnhGM1lrITM2ooLkxZ5NdbnOuaEx4zcnhpr3NCVKiF/g5\n55z38sWBEDFpzHnKWVtHrZfVadVBgtdc0IQRgMQccXxtdrNetAbxTVHLV3Vjwne6\nyIfN2Vp/Acu51zDyM/e3w4ei4lrtkAAS0OvA6BYdvA4GHhpq6izcEPJ5dKTTs64/\n+5PlzuF5xTkaiWV28/5VXHzG0UnoiQVtBqmespiK4tPArgrxqYBP4CPvkZ+X7G12\nWwYaZA0hAgMBAAECggEAAM0/44uVKguIELvJHwIOasGNtUwTtychpx4xfD/mKDjr\n/w7MTKJFSkUgX62pppJ1vsXpZplp9vBX2gbSAs2LA1fGHs1JGU2UAFKljwH8EUtR\n3yG7QeycqqedQVtUU4H5kpsUoGUVOb1FyASkjCXXu8WiKV6iSKVCuCL9I/WgXrv3\nG48o52l/skqjR+R1U5ftYje9ZNHWVqcJabUGw5hzsvmKLQP+PKiPtDNgwWMXzhhr\nig+BF6hY23BaOYH1atlSWO7mOulEwAyGWp/SnKaC/RTgbgZ6SAclyCXntG9MYj9T\nk6sFEPdTuHHMQBmseVV3XCggAjT/gpXhE35LGpIBqQKBgQD35Gp2s+UNblHJhTAK\ngS6At44b1wqvSj0jbunbYgP+ki2vntbvGlLoW3pp6NENN3o5Qlf3qzJ7A5mNTOyu\n9OYheat7fbzL5BB5Zj/oED7Ydyd+W1smz+lPbfKvGqCcjtAw6MXaRpx8YtJP9cln\nmfSC3gJJ098yC5imgh2lmYoVGQKBgQDVvXRVI7maZ7R8jQeKsCQdFTHtKmSQKYdH\nsqig9D/zAKEJBESyoL+LYL2gjDar7hMesCkjUKJOTbp5zk9eS0wSL5pdlkCSJ/R6\nZ1tiwSUB+9HGcSASBshSl5BFEuol7j6d0WwPQ4W5kQrl9ZLCV6QoDOssFOI7jLDj\ncWjD1tRxSQKBgE12G+qR1k53HamKK/PsYBqqwQZkERuraCVtYDhEjZj8FridOu6m\nXCfthfgYX1Lw9gl0eMaUwYZ9HntwATm+nzbwrSw+o0NXNeqpj+i1Qt4jhbzPUVF0\ngKRoaABdoripS9cstb66d+XKf4uq80+jZSuLsk1dno4l34KQgDEiJGrpAoGBALfW\nK6jPAWR8rhAyfLocpfMdt8N1Iumbzm8siz1k11v6vocy1KOO/zCyFGdyMdPPAULz\n4W4ufGs9D5aUjE9eFB/QMcUs5nzPQMfG/iMCXQJHxTYZNqxKiSIAmmXOzvWw5Mp4\nxaibOvlQdz8y6PeeyeJouh1AGRV+/OWjNai7rh2BAoGATzso3WiZY45lwGHDSC0H\n64e2xb/Za8YEnGJ3aXMAJ5HbkaOIBeMKsnqlaJ6s/QU/QTwGVRJ+msVcN2A/tCz0\ne6FrBC08xRULaNSJv2xhUVimxLNeZgMMMaEB35jVHjrIE92EPSPg/cHblxlwxm+/\nbmkhZIy8WkWUkvhS7MV9i/I=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-7g83g@agilesapp-bf9e7.iam.gserviceaccount.com",
    "client_id": "110419244491772585865",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7g83g%40agilesapp-bf9e7.iam.gserviceaccount.com"
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://agilesapp-bf9e7.firebaseio.com'
  });

  const db = admin.firestore();


var express = require('express');
var app = express();
var engines = require('consolidate');
/*
var config = {
  apiKey: "AIzaSyAoCjAzSrabZ5iR4d-zMaJNBlGL_5K8WXw",
  authDomain: "agilesapp-bf9e7.firebaseapp.com",
  databaseURL: "https://agilesapp-bf9e7.firebaseio.com",
  projectId: "agilesapp-bf9e7",
  storageBucket: "agilesapp-bf9e7.appspot.com",
  messagingSenderId: "799460737214"
};
const firebaseapp = firebase.initializeApp(config)
*/


/* consulta
db.collection('votos').get()
    .then((votos) => {
      votos.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
*/
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

  app.get('/login', function(req, res) {
    res.render('login'); 
  });
 app.get('/dashboard', function(req, res) {
    res.render('dashboard'); 
  });
  app.post('/votes' , function(req, res){
    
    db.collection('votos').add({
      usuario: 14,
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
