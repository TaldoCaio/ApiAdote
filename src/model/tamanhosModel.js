const mongoose = require('mongoose');


const tamanhoSchema = mongoose.Schema({

    titu_estatura: String,
    desc_estatura: String,
    idEstatura: Number
})


const Tamanho = mongoose.model('Tamanho',tamanhoSchema)
module.exports = Tamanho