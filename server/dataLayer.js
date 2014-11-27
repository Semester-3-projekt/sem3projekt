var personsModel = require('./model/db').personsModel;

var getStudents = function(person, done) {

    personsModel.find({person : email}).exec(function (err, res) {
        if (err) done(err);

        else {
            var toReturn = [];
            for(var i in res){
                toReturn.push({firstName: res[i].firstName, lastName: res[i].lastName})
            }
        }
        done(null, toReturn);
    });
};

exports.getStudents = getStudents;