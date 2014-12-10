var studentsModel = require('./model/db').studentsModel;
var classesModel = require('./model/db').classesModel;
var taskModel = require('./model/db').taskModel;
var periodModel = require('./model/db').periodModel;
var pointModel = require('./model/db').pointModel;



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
//********* Get tasks in periods *******//
function getTaskInPeriods(period, callback){
    taskModel.find({periodId:period})
        .populate('period.name')
        .exec(function (err, data) {
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
            if (err) callback(err);
            else {
                callback (null, data);
            }

        });

};
//********* Get  STUDENTS by class *****//
function getStudentByClass(classId,callback) {
    studentsModel.find({classId:classId})
        //.populate('classId')  // dokument classes i mongodb  virker NU!
        .exec(function(err, data){
            if (err) callback(err);
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

function getTaskById(_id, callback){
    taskModel.find({_id:_id})
        //.populate('classId')  // dokument classes i mongodb  virker NU!
        .exec(function(err, data){
            if (err)
                callback(err);
            else {
                callback (null, data);
            }

        });
};

//********* POST Specifik TASK*****//


//********** Create student*******//
function createStudent(student, callback){
  var json = new model.studentsModel(student);
    json.save(function(err, data){
        if (err)
            callback(err);
        else{
            callback(null, data);
        }
    });
};

//********* Get specific StudyPointById to reference student with a task giving a value! *****//
function getStudyPointById(_id,callback){
        pointModel.find({_id:_id})

            .exec(function(err, data){
            if(err)
                callback(err);
            else{
                callback(null,data)
            }
        });
};

function getStudyPointByStudentId(studentId,callback){
    pointModel.find({studentId:studentId})

        .exec(function(err, data){
            if(err)
                callback(err);
            else{
                callback(null,data)
            }
        });
};


module.exports = {
    getStudents: getStudents,
    getClasses: getClasses,
    getStudent: getStudent,
    getTasks: getTasks,
    getTaskById: getTaskById,
    getPeriods: getPeriods,
    getPeriod: getPeriod,
    createStudent: createStudent,
    getTaskInPeriods: getTaskInPeriods,
    getStudyPointById: getStudyPointById,
    getStudyPointByStudentId: getStudyPointByStudentId,
    getStudentByClass: getStudentByClass
     //exporterer

};