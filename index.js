const express = require("express");
const PORT = process.env
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
const connectDB = require("./connectDB")
require("dotenv").config()

connectDB()