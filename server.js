const app = require("./app");
// dotenv configuratuon
require("dotenv").config({
  path: "./config.env",
});
//mongo DB connection
const mongoose = require("mongoose");
const DB = process.env.MONGO_STRING.replace(
  "<password>",
  process.env.MONGO_PASSWORD
);

//mongo connection
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((connection) => {
    console.log("connected to mongoDB");
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started at PORT ${PORT}`);
});
