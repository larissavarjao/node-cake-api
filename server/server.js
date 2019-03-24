const port = 8080;
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { Cake } = require("./models/cake");

const app = express();

mongoose.connect("mongodb://cakefactory2:cakefactory2@ds159840.mlab.com:59840/cake-api", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/cake", (req, res) => {
    const cake = new Cake({
        nome: req.body.nome,
        recheio: req.body.recheio,
        massa: req.body.massa,
        fruta: req.body.fruta,
        cobertura: req.body.cobertura,
    });

    cake.save().then(doc => {
        res.send(doc);
    }).catch(e => res.status(400).send(e));
});

app.get("/cake", (req, res) => {
    Cake.find().then(allCakes => {
        if (allCakes.length >= 0) {
            res.send({ allCakes });
        } else {
            res.status(400).send(e);
        }
    }).catch(e => res.status(400).send(e));
});

app.get("/cake/:id", (req, res) => {
    const id = req.params.id;

    Cake.findById(id)
        .then(cake => {
            if (!cake) {
                return res.status(404).send();
            }

            res.send({ cake });
        })
        .catch(e => res.status(400).send());
});


app.delete('/cake/:id', (req, res) => {
    const id = req.params.id;

    Cake.findByIdAndRemove(id)
        .then(cake => {
            if (!cake) {
                return res.status(404).send();
            }

            res.send({ cake });
        })
        .catch(e => res.status(400).send());
});

app.put('/cake/:id', (req, res) => {
    const id = req.params.id;

    Cake.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(cake => {
            if (!cake) {
                return res.status(404).send();
            }
            res.send({ cake });
        })
        .catch(e => res.status(400).send());
});

app.listen(process.env.PORT || port, () => {
    console.log("Listening!! :)");
});
