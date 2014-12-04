var mongoose = require( 'mongoose' );

var dbURI;

//This is set by the backend tests
if( typeof global.TEST_DATABASE != "undefined" ) {
  dbURI = global.TEST_DATABASE;
}
else{
  dbURI = 'mongodb://sem3projekt:sem3projekt@ds053160.mongolab.com:53160/sem3projekt';
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  global.mongo_error = "Not Connected to the Database";
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

var studentsSchema = new mongoose.Schema({
  _id : String,
  firstName : String,
  lastName : String,
  userName : String,
  classId : {type: String, ref: 'classes'}
});

var pointSchema = new mongoose.Schema({
  _id : String,
  value : Number,
  studentId : {type: String, ref: 'student'}
});

var taskSchema = new mongoose.Schema({
  _id : String,
  name : String,
  maxPoints : Number,
  description : String,
  periodId : {type: String, ref: 'period'}
});

var periodSchema = new mongoose.Schema({
  _id : String,
  name : String,
  startDate : Date,
  endDate : Date,
  classId : {type: String, ref: 'classes'}
});

var classesSchema = new mongoose.Schema({
  _id : String,
  name : String
});

exports.studentsModel = mongoose.model('Student', studentsSchema, 'student');
exports.pointModel = mongoose.model('Point', pointSchema, 'point');
exports.taskModel = mongoose.model('Task',taskSchema, 'task');
exports.periodModel = mongoose.model('Period', periodSchema, 'period');
exports.classesModel = mongoose.model('Classes', classesSchema, 'classes');