"use strict";

var model = require("./db");
function remove() {
    model.classesModel.remove({}).exec();
    model.pointModel.remove({}).exec();
    model.taskModel.remove({}).exec();
    model.periodModel.remove({}).exec();
    model.studentsModel.remove({}).exec();
}

function insert() {
    var myclasses = [
        {
            _id: 1,
            name: "datA"
        },
        {
            _id: 2,
            name: "datB"
        }
    ];
    var points = [
        {
            "_id": 1,
            "value": 5,
            "studentId": 1
        },
        {
            "_id": 2,
            "value": 3,
            "studentId": 2
        },
        {
            "_id": 3,
            "value": 2,
            "studentId": 3
        },
        {
            "_id": 4,
            "value": 1,
            "studentId": 4
        },
        {
            "_id": 5,
            "value": 3,
            "studentId": 5
        },
        {
            "_id": 6,
            "value": 2,
            "studentId": 6
        },
        {
            "_id": 7,
            "value": 3,
            "studentId": 7
        },
        {
            "_id": 8,
            "value": 2,
            "studentId": 8
        },
        {
            "_id": 9,
            "value": 2,
            "studentId": 9
        },
        {
            "_id": 10,
            "value": 1,
            "studentId": 10
        },
        {
            "_id": 11,
            "value": 2,
            "studentId": 11
        },
        {
            "_id": 12,
            "value": 3,
            "studentId": 12
        },
        {
            "_id": 13,
            "value": 4,
            "studentId": 13
        },
        {
            "_id": 14,
            "value": 1,
            "studentId": 14
        },
        {
            "_id": 15,
            "value": 3,
            "studentId": 15
        },
        {
            "_id": 16,
            "value": 2,
            "studentId": 16
        },
        {
            "_id": 17,
            "value": 6,
            "studentId": 17
        },
        {
            "_id": 18,
            "value": 3,
            "studentId": 18
        },
        {
            "_id": 19,
            "value": 2,
            "studentId": 19
        },
        {
            "_id": 20,
            "value": 1,
            "studentId": 20
        }
    ];
    var periods = [
        {
            "_id": 1,
            "number": 1,
            "name": "p1 - Network & Socket programming",
            "startDate": "2015-08-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
            classId: 1
        },
        {
            "_id": 2,
            "number": 2,
            "name": "p2 - JPA",
            "startDate": "2015-09-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
            classId: 1
        },
        {
            "_id": 3,
            "number": 3,
            "name": "p3 - Node.js & Javascript",
            "startDate": "2015-09-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
            classId: 1
        },
        {
            "_id": 4,
            "number": 4,
            "name": "p4 - Angular",
            "startDate": "2015-09-28T17:37:23-07:00", endDate: "2015-09-28T17:37:23-07:00",
            classId: 1
        }
    ];

    var tasks = [
        {
            "_id": 1,
            "name": "do this1",
            "maxPoints": 160,
            "description": "Do it this 1",
            "periodId": 1
        },
        {
            "_id": 2,
            "name": "do this2",
            "maxPoints": 160,
            "description": "Do it this 2",
            "periodId": 2
        },
        {
            "_id": 3,
            "name": "do this3",
            "maxPoints": 160,
            "description": "Do it this 3",
            "periodId": 3
        },
        {
            "_id": 4,
            "name": "do this4",
            "maxPoints": 160,
            "description": "Do it this 4",
            "periodId": 4
        },
        {
            "_id": 5,
            "name": "do this5",
            "maxPoints": 160,
            "description": "Do it this 5",
            "periodId": 1
        },
        {
            "_id": 6,
            "name": "do this6",
            "maxPoints": 160,
            "description": "Do it this 6",
            "periodId": 2
        },
        {
            "_id": 7,
            "name": "do this7",
            "maxPoints": 160,
            "description": "Do it this 7",
            "periodId": 3
        },
        {
            "_id": 8,
            "name": "do this8",
            "maxPoints": 160,
            "description": "Do it this 8",
            "periodId": 4
        },
        {
            "_id": 9,
            "name": "do this9",
            "maxPoints": 160,
            "description": "Do it this 9",
            "periodId": 1
        },
        {
            "_id": 10,
            "name": "do this10",
            "maxPoints": 160,
            "description": "Do it this 10",
            "periodId": 1
        }
    ];
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

    var studentsx = 0;
    students.forEach(function (student) {
        student.classId = 1;
        var newStudent = new model.studentsModel(student);
        newStudent.save();
        studentsx++;
    });
    console.log(studentsx + " students saved");

    var periodsx = 0;
    periods.forEach(function (period) {
        period.classId = 1;
        var newPeriod = new model.periodModel(period);
        newPeriod.save();
        periodsx++;
    });
    console.log(periodsx + " periods saved");

    var tasksx = 0;
    tasks.forEach(function (task) {
        task.periodId = 1;
        var newTask = new model.taskModel(task);
        newTask.save();
        tasksx++;
    });
    console.log(tasksx + " tasks saved");

    var pointsx = 0;
    var qwert = 1;
    points.forEach(function (point) {
        point.studentId = qwert++;
        var newPoint = new model.pointModel(point);
        newPoint.save();
        pointsx++;
    });
    console.log(pointsx + " points saved");
}

//remove();
insert();
