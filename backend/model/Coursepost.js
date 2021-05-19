const mongoose = require("mongoose");

const coursepostSchema = new mongoose.Schema({
    Id:Number,
    Title:String,
    Sort_Desc:String,
    Full_Desc:String,
    Image:String,
    Author:String,
    EnteredDate:Date,
    IsActive:Number
});

module.exports = mongoose.model("Coursepost", coursepostSchema);