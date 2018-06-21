//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');

var functions = require('firebase-functions');
const app = express(); //this represent our aplication


app.use(express.json());
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
app.get('/', function(req, res) {
    res.type('text');
    res.send('Hello World!!!');
  });

  app.get('/courses', function(req, res) {
    res.type('application/json');
    res.send(courses);
  });

  app.get('/courses/:id', function(req, res) {
    res.type('application/json');
    res.send(courses.find( course => course.id  === parseInt(req.params.id)));
  
  });

  app.post('/courses',function(req,res){
    var course = {name: req.body.name , id: courses.length + 1};
    courses.push(course);
    res.send(course);
    console.log(req.body);
  });

  app.put('/courses',function(req,res){ 
    var course = courses.find( course => course.id === parseInt(req.params.id)); //find element
    courses = courses.filter( elto => elto.id !== course.id );// elimino elemento
    
    //actualizo atributos
    course.name = req.body.name;
    //lo agrego
    courses.push(course);
    res.send(course);
    });

 
 
  app.delete('/courses',function(req,res){
    
    courses = courses.filter( elto => elto.id !== course.id );// elimino elemento
    res.send(courses);
    });

    exports.app = functions.https.onRequest(app);
  
