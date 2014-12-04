"use strict";

var model = require("./db");
model.classesModel.remove({}).exec();
model.pointModel.remove({}).exec();
model.taskModel.remove({}).exec();
model.periodModel.remove({}).exec();
model.studentsModel.remove({}).exec();

var myclass = new  model.classesModel({_id: 1, name:"datA"});
myclass.save(function(err) {
    console.log(err);
});
var periods = [
    {
        "_id": 1,
        "startDate": "2015-09-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
        classId: {type: String, ref: 'classes'}
    },
    {
        "_id": 2,
        "startDate": "2015-09-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
        classId: {type: String, ref: 'classes'}
    },
    {
        "_id": 3,
        "startDate": "2015-09-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
        classId: {type: String, ref: 'classes'}
    },
    {
        "_id": 4,
        "startDate": "2015-09-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
        classId: {type: String, ref: 'classes'}
    }
];

var tasks = [
    {
        "_id": 1,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 2,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 3,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 4,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 5,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 6,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 7,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 8,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 9,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    },
    {
        "_id": 10,
        "name": "do this",
        "maxPoints": 160,
        "description": "Do it this way",
        "periodId": {type: String, ref: 'period'}
    }
]
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
periods.forEach(function(period){
    period.classId = 1;
    var newPeriod = new model.periodModel(period);
    newPeriod.save();
});
tasks.forEach(function(task){
    task.periodId = 1;
    var newTask = new model.taskModel(task);
    newTask.save();
});
