const port = 8080;
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { Cake } = require("./models/cake");

const app = express();

mongoose.connect("mongodb://cakefactory2:cakefactory2@ds159840.mlab.com:59840/cake-api", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/cakes", (req, res) => {
    const cake = new Cake({
        nome: req.body.nome,
        recheio: req.body.recheio,
        massa: req.body.massa,
        fruta: req.body.fruta,
        cobertura: req.body.cobertura,
    });

    cake.save().then(doc => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.get("/cakes", (req, res) => {
    const cake = new Cake({
        nome: req.body.nome,
        recheio: req.body.recheio,
        massa: req.body.massa,
        fruta: req.body.fruta,
        cobertura: req.body.cobertura,
    });

    cake.save().then((m) => console.log(m));
});

app.listen(process.env.PORT || port, () => {
    console.log("Listening!! :)");
});
