const express = require("express");
const PORT = process.env.PORT;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./connectDB");
require("dotenv").config();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const { MONGO_URI } = process.env;

connectDB(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Connected...");
    });
  })
  .catch((err) => console.log(err));