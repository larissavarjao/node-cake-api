const mongoose = require("mongoose");

mongoose.exports = mongoose.connect("mongodb+srv://cakefactory:cakefactory@cluster0-cxvbz.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true });