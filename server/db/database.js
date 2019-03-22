const mongoose = require("mongoose");

mongoose.exports = mongoose.connect("mongodb://cakefactory2:cakefactory2@ds159840.mlab.com:59840/cake-api",
    { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("conectou");
});