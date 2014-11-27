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

var personsSchema = new mongoose.Schema({
  userName : String,
  role : String,
  firstName : String,
  lastName : String,
  email: {type: String, unique: true},
  address : String,
  created: { type: Date, default: new Date() }
});
exports.personsModel = mongoose.model('Person', personsSchema);

var studentSchema = new mongoose.Schema({
  studyPoints : Number
});
exports.studentModel = mongoose.model('student', studentSchema)

var teacherSchema = new mongoose.Schema({

});
exports.teacherModel = mongoose.model('teacher', teacherSchema)

var pointSchema = new mongoose.Schema({
  value : Number,
  date : Date
});
exports.pointModel = mongoose.model('point', pointSchema)

var taskSchema = new mongoose.Schema({
  taskId : String,
  maxPoint : Number
});
exports.taskModel = mongoose.model('task',taskSchema)

var periodSchema = new mongoose.Schema({
  periodId : String,
  subject: String
});

exports.periodModel = mongoose.model('period', periodSchema)

var semesterSchema = new mongoose.Schema({
  semesterId : String
});

exports.semesterModel = mongoose.model('semester', semesterSchema)