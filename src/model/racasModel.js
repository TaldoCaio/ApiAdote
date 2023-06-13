const mongoose = require('mongoose');

const racaSchema = mongoose.Schema({
    raca:String,
    racaID: Number,
    animalID: Number
})

const Raca = mongoose.model('Raca',racaSchema)
module.exports = Raca