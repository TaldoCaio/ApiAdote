const mongoose = require('mongoose');

const caracSchema = mongoose.Schema({

    animal: Number,
    tamanho: Number,
    raca: Number,
    Idade: Number

});

const Caracteristica = mongoose.model('Caracteristica',caracSchema);
module.exports = Caracteristica;
