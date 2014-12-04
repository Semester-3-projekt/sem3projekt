var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var person = mongoose.model('Student');
var dbLayer = require('../dataLayer.js');

router.get('/students', function(req, res) {
 // var persons = [{firstName: 'Peter'}, {firstName: 'Joe'}];
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
})


/* GET A User From The DataBase */
router.get('/getPersons/:student', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  var requestedStudent = req.params.student;
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

module.exports = router;
