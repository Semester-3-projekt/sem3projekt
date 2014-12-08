var studentsModel = require('./model/db').studentsModel;
var classesModel = require('./model/db').classesModel;
var taskModel = require('./model/db').taskModel;
var periodModel = require('./model/db').periodModel;


function getStudents(callback) {

    studentsModel.find({}, function (err, data) {
        if (err) callback(err);
        else {
            callback (null, data);
        }

    });
};

/***********Get list of CLASSES********/
function getClasses(callback)  {
    classesModel.find({}, function (err, data) {
        if (err)
            callback(err);
        else {
            callback (null, data)
        }
    });

};


//********* Get list of PERIODS *****//
function getPeriods(callback){
    periodModel.find({}, function(err,data){
        if(err)
            callback(err);
        else{
            callback(null,data)
        }
    });
};
//********* Get specific PERIOD *****//
function getPeriod(periodNumber,callback){
    periodModel.find({number:periodNumber})
        //.populate('NOGET_Id')  // Hvad der kan populates!
        .exec(function(err,data){
        if(err)
            callback(err);
        else{
            callback(null,data);
        }
    });
};
//********* Get specific STUDENT *****//
function getStudent(userName,callback) {
    studentsModel.find({userName:userName})
        //.populate('classId')  // dokument classes i mongodb  virker NU!
        .exec(function(err, data){
            if (err)
                callback(err);
            else {
                callback (null, data);
            }

        });

};
//********* Get list of TASKS*****//
function getTasks(callback) {
    taskModel.find({}, function(err,data){
        if(err)
        callback(err);
        else{
            callback(null,data)
        }
    });
};     // hvor class , periode og Student er specifiseret !?


//********* POST Specifik TASK*****//



module.exports = {
    getStudents: getStudents,
    getClasses: getClasses,
    getStudent: getStudent,
    getTasks: getTasks,
    getPeriods: getPeriods,
    getPeriod: getPeriod
     //exporterer

};