const Student = require("../models/studentModel");
exports.getStudents = async (req, res) => {
  try {
    var students = await Student.find();
    res.status(200).json({
      status: "success",
      data: {
        students,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.addStudent = async (req, res) => {
  try {
    var student = await Student.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    var { studentId } = req.params;
    console.log(req.body);
    var modifiedStudent = await Student.findOneAndUpdate(
      { _id: studentId },
      req.body,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        modifiedStudent,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    var { studentId } = req.params;
    var returned = await Student.deleteOne({ _id: studentId });
    res.status(200).json({
      status: "success",
      data: {
        returned,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
