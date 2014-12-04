var studentsModel = require('./model/db').studentsModel;
var classesModel = require('./model/db').classesModel;

function getStudents(callback) {

    studentsModel.find({}, function (err, data) {
        if (err) result(err);
        else {
            result(null, data);
        }

    });
};
function getClasses(callback)  {
    classesModel.find({}, function (err, data) {
        if (err)
            result(err);
        else {
            result(null, data)
        }
    });

};
module.exports = {
    getStudents: getStudents,
    getClasses: getClasses
};