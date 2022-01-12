const express = require("express");
const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/").get(getStudents).post(addStudent);
router.post("/:studentId", updateStudent);
router.delete("/:studentId", deleteStudent);
module.exports = router;
