const mongoose = require('mongoose');

const petSchema = mongoose.Schema(
    {
        peso: {
            type: Number,
            require: [true, "Insira o peso do animal"]
        },
        raca: {
            type: Number,
            require: [true, "Insira a raça do animal"]
        },
        idade: {
            type: Number,
            require: [true, "Insira a idade do animal"]
        },
        animal: {
            type: Number,
            require: [true, "Insira o animal"]
        },
        estatura: {
            type: Number,
            require: [true, "Insira o porte aproximado do animal"]
        }
    },
    {
        timestamps: true
    }
)

const Pet = mongoose.model('Pet',petSchema);
module.exports = Pet;