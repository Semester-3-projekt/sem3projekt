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
module.exports = {
    getStudents: getStudents,
    getClasses: getClasses,
    getStudent: getStudent      //exporterer

};