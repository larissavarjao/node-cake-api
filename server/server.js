// creating port to set on server
const port = 8080;

// body parser of requisition
const bodyParser = require("body-parser");

//our framework, express
const express = require("express");

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(process.env.PORT || port, () => {
    console.log("Listening!! :)");
});
