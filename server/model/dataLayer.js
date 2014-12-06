var studentsModel = require('./model/db').studentsModel;
var classesModel = require('./model/db').classesModel;
var taskModel = require('./model/db').taskModel;
var studentsModel = require('./db').studentsModel;
var classesModel = require('./db').classesModel;

function getStudents(callback) {

    studentsModel.find({}, function (err, data) {
        if (err) callback(err);
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

function getPeriods(className,callback){

}

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