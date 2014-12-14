var studentsModel = require('./model/db').studentsModel;
var taskModel = require('./model/db').taskModel;
var classesModel = require('./model/db').classesModel;

var periodModel = require('./model/db').periodModel;
var pointModel = require('./model/db').pointModel;

function getStudent(userName,callback) {
    studentsModel.find({userName: userName})
        //.populate('classId')  // dokument classes i mongodb  virker NU!
        .exec(function (err, data) {
            if (err) callback(err);
            else {
                callback(null, data);
            }

        });
};
function getTasks(callback) {
    taskModel.find({}, function(err,data){
        if(err)
            callback(err);
        else{
            callback(null,data)
        }
    });
};
function getClass(callback){
    classesModel.find({}, function(err, data){
        if(err)
        callback(err);
        else{
            callback(null, data)
        }
    });
};
function getPeriod(callback){
    periodModel.find({}, function(err, data){
        if(err)
            callback(err);
        else{
            callback(null, data)
        }
    });
};

module.exports = {
    getStudent: getStudent,
    getTasks: getTasks,
    getClass: getClass,
    getPeriod: getPeriod
};