const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    userName:{
        type: String,
        unique: [true, `${userName} is not available`],
        trim: true,
    }
});
