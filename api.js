const express = require('express');
const app = express(); //this represent our aplication

app.set('port', process.env.PORT || 3000);
const port = app.get('port');
app.use(express.json());
const courses =[
  {
     name:"English",
     id:1
  },
  {
     name:"Math",
     id:2
  },
  {
     name:"Programing",
     id:3
  }
]

//routes
app.get('/', function(req, res) {
    res.type('text');
    res.send('Hello World');
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
  })

 

  app.listen(port, function () {
    console.log('Example app listening on port '+ port);
  });