var studentsModel = require('./model/db').studentsModel;
var classesModel = require('./model/db').classesModel;
var taskModel = require('./model/db').taskModel;


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

//******** get one specific Student *****//
// Add new member: POST /members/:id/:name/:address/:age        //Create an object:
// var person = new personModel({name:’Joe’,age:24});
//Save the object in the database:
//person.save(function(err, person) {
//    if(err) …

//});
//******** ØØØØØØØØØØØØØ *****//



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