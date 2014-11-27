var personsModel = require('./model/db').personsModel;

var getStudents = function(person, done) {

    personsModel.find({person : person}).exec(function (err, res) {
        if (err) done(err);

        else done(null, res);
    });
};

exports.getStudents = getStudents;