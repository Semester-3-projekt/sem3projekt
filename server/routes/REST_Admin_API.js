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

//GET A User From The DataBase Virker denne ??? Bruges den ??? RJ
//router.get('/getStudents/:student', function(req, res) {
//  if(typeof global.mongo_error !== "undefined"){
//    res.status(500);
//    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
//    return;
//  }
//  var requestedStudent = req.params.student;
//  dbLayer.getStudents(function (err, data) {
//    if (err) {
//      res.status(err.status || 400);
//      res.send(JSON.stringify({error: err.toString()}));
//      return;
//    }
//    console.log(data);
//    res.header("Content-type","application/json");
//    res.send(JSON.stringify(data));
//  });
//});


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

module.exports = router;
