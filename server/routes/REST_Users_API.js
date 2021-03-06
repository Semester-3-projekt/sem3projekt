var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var student = mongoose.model('Student');
var classes = mongoose.model('Classes');
var period = mongoose.model('Period');
var point = mongoose.model('Point');
//**************************************************HUSK !!!! at require, når der referes til en model i db */
var udbLayer = require('../UserDataLayer');

router.get('/test', function(req, res) {   //  test kaldes fra   view 2 "mgs"
    res.header("Content-type","application/json");
    res.end('{"msg" : "Test Message, You are logged on as a User since you could fetch this data"}');   // msg sendes til
});    /// denne kan bruges til generald Student info, som alle studerende kan se !

/* GET A User From The DataBase, da kun en user skal ses i view2 !*/
router.get('/getStudent/:student', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    var requestedStudent = req.params.student;
    udbLayer.getStudent(requestedStudent,function (err, data) {
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

// ********** Get list of Tasks ****** ///
router.get('/getTasks/:studentId', function(req, res) {
    udbLayer.getTasks(function (err, data) {
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


// ********** class *** ****** ///
router.get('/getClass/:studentId', function(req, res) {
    udbLayer.getClass(function (err, data) {
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

router.get('/getPeriod/:studentId', function(req, res) {
    udbLayer.getPeriod(function (err, data) {
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
