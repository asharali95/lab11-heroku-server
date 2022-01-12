const express = require("express");
const app = express();
const studentRouter = require("./routes/studentRoutes");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api/v1/students", studentRouter);
module.exports = app;
