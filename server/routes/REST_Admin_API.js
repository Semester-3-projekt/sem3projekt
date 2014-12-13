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

function isDbRunning() {
    if (typeof global.mongo_error !== "undefined") {
        res.status(500);
        res.end("Error: " + global.mongo_error + " To see any data here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return false;
    }
    return true;
}

router.get('/getStudents', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    dbLayer.getStudents(function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
    });
});


/*********  disse skal vel være for at kalde fra html views ??? */
router.get('/getClasses', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    dbLayer.getClasses(function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));

    });
});

/************ get PERIODS *****/              /* VIRKER HURRA!!!*/
router.get('/getPeriods', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    dbLayer.getPeriods(function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));

    });
});


/************ get one specifik PERIOD *****/
router.get('/getPeriod/:periodNumber', function (req, res) {
    //console.log(number)
    if (!isDbRunning()) {
        return;
    }
    var requestedPeriodName = req.params.periodNumber;
    dbLayer.getPeriod(requestedPeriodName, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
    });
});


/* GET A User From The DataBase, fordi at kun en user skal ses i view3 !*/
router.get('/getStudent/:student', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var requestedStudent = req.params.student;
    dbLayer.getStudent(requestedStudent, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
    });
});

/* GET TASKS From The DataBase !*/
router.get('/getTasks', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    dbLayer.getTasks(function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));

    });
});

/* GET A specifik TASK From The DataBase !*/
router.get('/getTaskById/:_id', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var requestedId = req.params._id;
    dbLayer.getTaskById(requestedId, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
    });
});

router.get('/getTaskInPeriods/:_id', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var periodId = req.params._id;
    dbLayer.getTaskInPeriods(periodId, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
    });
});

router.get('/getStudentsByClass/:classId', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var classId = req.params.classId;
    dbLayer.getStudentByClass(classId, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));
    });
});


/* GET A specifik StudyPoint in The DataBase !*/
router.get('/getStudyPointById/:_id', function (req, res) {
    if(!isDbRunning()){
        return;
    }
        var requestedStudyId = req.params._id;
    dbLayer.getStudyPointById(requestedStudyId, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));

    });

});

router.get('/getStudyPointByStudentId/:studentId', function (req, res) {
    if (!isDbRunning()) {
        return;
    }
    var studentId = req.params.studentId;
    dbLayer.getStudyPointByStudentId(studentId, function (err, data) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(data));

    });
});

/*** POST create a new student ***/
router.post('/createStudent', function (req, res) {
    if (!isDbRunning()) {
        return;
    }

    dbLayer.createStudent(req.body, function (err, newStudent) {
        if (err) {
            res.status(err.status || 400);
            res.send(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.send(JSON.stringify(newStudent));
    });
});
/*Slut*/

/* PUT (create,Update) A specifik StudyPoint in The DataBase !*/

/* relate these with a specifik Student & a specifik Task!*/


module.exports = router;
