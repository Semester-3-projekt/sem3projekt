var studentsModel = require('./model/db').studentsModel;

var getStudents = function(result) {

    studentsModel.find({}, function (err, data) {
        if (err) result(err);
        else {
            result(null, data);
        }

    });
};
exports.getStudents = getStudents;