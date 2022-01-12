const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: {
    type: String,
    unique: true,
  },
  section: String,
  semester: Number,
  courses: Array,
});

var Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
