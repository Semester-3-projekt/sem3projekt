var express = require('express');
var dbLayer = require('../model/dataLayer');
var router = express.Router();
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

// ********** Get list of Tasks ****** ///
router.get('/getTasks', function(req, res) {
    dbLayer.getTasks(function (err, data) {
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




module.exports = router;
