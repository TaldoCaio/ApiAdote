const mongoose = require('mongoose');

const animaisSchema = mongoose.Schema({
    animal: String,
    codAnimal: Number
})

const Animais = mongoose.model("Animais",animaisSchema)
module.exports = Animais