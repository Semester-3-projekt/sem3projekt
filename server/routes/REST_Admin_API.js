var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var student = mongoose.model('Student');
var classes = mongoose.model('Classes');
var period = mongoose.model('Period');
var tasks = mongoose.model('Task');
var point = mongoose.model('Point');
//**************************************************HUSK !!!! at require, når der referes til en model i db */
var dbLayer = require('../dataLayer');

router.get('/getStudents', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
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


/*********  disse skal vel være for at kalde fra html views ??? */
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
      console.log(data);
    res.header("Content-type","application/json");
    res.send(JSON.stringify(data));

  });
});

/************ get PERIODS *****/              /* VIRKER HURRA!!!*/
router.get('/getPeriods', function(req,res){
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    dbLayer.getPeriods(function(err, data){
        if(err){
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));

    });
});
/************ get one specifik PERIOD *****/
router.get('/getPeriod/:periodNumber', function(req, res) {
    //console.log(number)
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a specifik period here, (see model-->db.js for instructions)");
        return;
    }
    var requestedPeriodName = req.params.periodNumber;
    dbLayer.getPeriod(requestedPeriodName,function (err, data) {
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
/* GET A User From The DataBase, fordi at kun en user skal ses i view3 ((er også i view2)) !*/
router.get('/getStudent/:student', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    var requestedStudent = req.params.student;
    dbLayer.getStudent(requestedStudent,function (err, data) {
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

/* GET TASKS From The DataBase !*/
router.get('/getTasks', function(req,res){
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    dbLayer.getTasks(function(err, data){
        if(err){
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(data);
        res.header("Content-type","application/json");
        res.send(JSON.stringify(data));

    });
});

/* GET A specifik TASK From The DataBase !*/
router.get('/getTaskById/:_id', function(req, res) {
    if (typeof global.mongo_error !== "undefined") {
        res.status(500);
        res.end("Error: " + global.mongo_error + " To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    var requestedId = req.params._id;
    dbLayer.getTaskById(requestedId, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        console.log(data);
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
    });
});

/* GET A specifik StudyPoint in The DataBase !*/
router.get('/getStudyPointById/:_id', function(req, res){
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" U have to be logget ind! But fungtion: getStudyPointById/STudiId didnt succed!(see model-->db.js for instructions)");
        return;
    }
    var requestedStudyId = req.params._id;
    dbLayer.getStudyPointById(requestedStudyId, function(err,data){
        if(err){
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
        return;
        }
    console.log(data);
    res.header("Content-type", "application/json");
    res.send(JSON.stringify(data));

    });

})
/*Slut*/


/* PUT (create,Update) A specifik StudyPoint in The DataBase !*/

/* relate these with a specifik Student & a specifik Task!*/


module.exports = router;
