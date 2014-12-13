var mongoose = require( 'mongoose' );
var autoIncrement = require('mongodb-autoincrement');

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
  _id : Number,
  firstName : String,
  lastName : String,
  userName : String,
  classId : {type: Number, ref: 'classes'}
});

var pointSchema = new mongoose.Schema({
  _id : Number,
  value : Number,
  studentId : {type: Number, ref: 'student'},
  taskId : {type: Number, ref: 'task'}
});

var taskSchema = new mongoose.Schema({
  _id : Number,
  name : String,
  maxPoints : Number,
  description : String,
  periodId : {type: Number, ref: 'period'}
});

var periodSchema = new mongoose.Schema({
  _id : Number,
  number : Number,
  name : String,
  startDate : Date,
  endDate : Date,
  classId : {type: Number, ref: 'classes'}
});

var classesSchema = new mongoose.Schema({
  _id : Number,
  name : String
});

//studentsSchema.plugin(autoIncrement.plugin, 'Student');
//pointSchema.plugin(autoIncrement.plugin, 'Point');
//taskSchema.plugin(autoIncrement.plugin, 'Task');
//periodSchema.plugin(autoIncrement.plugin, 'Period');
//classesSchema.plugin(autoIncrement.plugin, 'Classes');

studentsSchema.plugin(autoIncrement.mongoosePlugin);
pointSchema.plugin(autoIncrement.mongoosePlugin);
taskSchema.plugin(autoIncrement.mongoosePlugin);
periodSchema.plugin(autoIncrement.mongoosePlugin);
classesSchema.plugin(autoIncrement.mongoosePlugin);




exports.studentsModel = mongoose.model('Student', studentsSchema, 'student');
exports.pointModel = mongoose.model('Point', pointSchema, 'point');
exports.taskModel = mongoose.model('Task',taskSchema, 'task');
exports.periodModel = mongoose.model('Period', periodSchema, 'period');
exports.classesModel = mongoose.model('Classes', classesSchema, 'classes');