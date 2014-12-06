var studentsModel = require('./model/db').studentsModel;
var classesModel = require('./model/db').classesModel;
var taskModel = require('./model/db').taskModel;

function getStudents(callback) {

    studentsModel.find({}, function (err, data) {
        if (err) result(err);
        else {
            callback (null, data);
        }

    });
};

//******** get one specific Student *****//
function getStudent(userName,callback) {

    studentsModel.find({userName:userName})
        // .populate('classId')  // Problemer: dokument classes i mongodb  virker ikke når vi vil have dokument classes med!
        .exec(function (err, data) {
        if (err)
            callback(err);
        else {
            callback (null, data);
        }

    });
};

function getClasses(callback)  {
    classesModel.find({}, function (err, data) {
        if (err)
            callback(err);
        else {
            callback (null, data)
        }
    });

};

//********* Get list of Tasks*****//
function getTasks(callback) {
    taskModel.find({}, function(err,data){
        if(err)
        callback(err);
        else{
            callback(null,data)
        }
    });
};
// hvor class , periode og Student er specifiseret !?






module.exports = {
    getStudents: getStudents,
    getClasses: getClasses,
    getStudent: getStudent,
    getTasks: getTasks  //exporterer

};