var personsModel = require('./model/db').personsModel;

var getStudents = function(result) {

    personsModel.find({}, function (err, data) {
        if (err) result(err);
        else {
            result(null, data);
        }

    });
};
exports.getStudents = getStudents;