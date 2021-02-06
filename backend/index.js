const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes.js");

require("dotenv").config;

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.DB;
const port = process.env.port || 5000;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = moongose.connection;
connection.once("open", () => {
  console.log("connected to mongoDB");
});
app.use("/", userRoute);
app.listen(port, () => {
  console.log(`app connected to port ${port}`);
});
