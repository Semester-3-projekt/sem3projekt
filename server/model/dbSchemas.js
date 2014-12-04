"use strict";

var model = require("./db");
model.classesModel.remove({}).exec();
model.pointModel.remove({}).exec();

var myclass = new  model.classesModel({_id: 1, name:"datA"});
myclass.save(function(err) {
    console.log(err);
});
var mypoints = new model.pointModel({_id: 0, value: 0, studentId: {type: String, ref: 'student'} });
mypoints.save(function(err){
    console.log(err);
});


var students = [
    {
        "_id": 1,
        "firstName": "Zahir",
        "lastName": "Delaney",
        "userName": "felis",
        "classId": 1
    },
    {
        "_id": 2,
        "firstName": "Grant",
        "lastName": "Velez",
        "userName": "Phasellus",
        "classId": 1
    },
    {
        "_id": 3,
        "firstName": "Alice",
        "lastName": "Dean",
        "userName": "dolor.",
        "classId": 1
    },
    {
        "_id": 4,
        "firstName": "Kiayada",
        "lastName": "Barnett",
        "userName": "nisi.",
        "classId": 1
    },
    {
        "_id": 5,
        "firstName": "Reese",
        "lastName": "Middleton",
        "userName": "eget",
        "classId": 1
    },
    {
        "_id": 6,
        "firstName": "Mary",
        "lastName": "Lowery",
        "userName": "purus,",
        "classId": 1
    },
    {
        "_id": 7,
        "firstName": "Quentin",
        "lastName": "Mcneil",
        "userName": "elementum",
        "classId": 1
    },
    {
        "_id": 8,
        "firstName": "Macon",
        "lastName": "Shaw",
        "userName": "auctor,",
        "classId": 1
    },
    {
        "_id": 9,
        "firstName": "Salvador",
        "lastName": "Webster",
        "userName": "lectus",
        "classId": 1
    },
    {
        "_id": 10,
        "firstName": "Kiara",
        "lastName": "Bean",
        "userName": "rutrum.",
        "classId": 1
    },
    {
        "_id": 11,
        "firstName": "Prescott",
        "lastName": "Farmer",
        "userName": "auctor",
        "classId": 1
    },
    {
        "_id": 12,
        "firstName": "Ciara",
        "lastName": "Cooley",
        "userName": "vulputate",
        "classId": 1
    },
    {
        "_id": 13,
        "firstName": "Ava",
        "lastName": "Farrell",
        "userName": "quis",
        "classId": 1
    },
    {
        "_id": 14,
        "firstName": "Leo",
        "lastName": "Doyle",
        "userName": "dolor.",
        "classId": 1
    },
    {
        "_id": 15,
        "firstName": "Oren",
        "lastName": "Carver",
        "userName": "tincidunt.",
        "classId": 1
    },
    {
        "_id": 16,
        "firstName": "Sylvia",
        "lastName": "Franks",
        "userName": "felis.",
        "classId": 1
    },
    {
        "_id": 17,
        "firstName": "Rhea",
        "lastName": "Oconnor",
        "userName": "mauris",
        "classId": 1
    },
    {
        "_id": 18,
        "firstName": "Alea",
        "lastName": "Maddox",
        "userName": "sociis",
        "classId": 1
    },
    {
        "_id": 19,
        "firstName": "Hayden",
        "lastName": "Cooley",
        "userName": "ut,",
        "classId": 1
    },
    {
        "_id": 20,
        "firstName": "Lilah",
        "lastName": "Schwartz",
        "userName": "eget",
        "classId": 1
    }
    ];

students.forEach(function(student) {
    student.classId = 1;
    var newStudent = new model.studentsModel(student);
    newStudent.save();
});

