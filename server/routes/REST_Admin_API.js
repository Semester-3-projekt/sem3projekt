var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var student = mongoose.model('Student');
var classes = mongoose.model('Classes');
var dbLayer = require('../dataLayer');

router.get('/getStudents', function(req, res) {
  //var persons = [{firstName: 'Peter'}, {firstName: 'Joe'}];
  dbLayer.getStudents(function (err, data) {
    if (err) {
      res.status(err.status || 400);
      res.send(JSON.stringify({error: err.toString()}));
      return;
    }
    console.log(data);
    res.header("Content-type","application/json");
    res.send(JSON.stringify(data));
  });
});



router.get('/classes', function(req,res){
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  dbLayer.getClasses(function(err, data){
    if(err){
     res.status(err.status || 400);
     res.send(JSON.stringify({error: err.toString()}));
     return;
   }
    res.header("Content-type","application/json");
    res.send(JSON.stringify(data));

  });
});


/*   forsøg med Post new student'/
router.post('/postStudent', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    dbLayer.getClasses(function(err, data){
        if(err){
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));

    });
});

// Add new member: POST /members/:id/:name/:address/:age        //Create an object:
// var person = new personModel({name:’Joe’,age:24});
//Save the object in the database:
//person.save(function(err, person) {
//    if(err) …

//});
/******** noter til post new student *****/

module.exports = router;
