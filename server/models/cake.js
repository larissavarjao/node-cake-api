const mongoose = require('mongoose');

const Cake = mongoose.model('Cake', {
    nome: {
        type: String,
        required: true,
        minlength: 1
    },
    recheio: {
        type: String,
        required: true,
        minlength: 1
    },
    massa: {
        type: String,
        required: true,
        minlength: 1
    },
    fruta: {
        type: String,
        required: true,
        minlength: 1
    },
    cobertura: {
        type: String,
        required: true,
        minlength: 1
    },
});

module.exports = {
    Item
};