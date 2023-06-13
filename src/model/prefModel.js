const mongoose = require('mongoose');

const prefSchema = mongoose.Schema({

    idUsuario: {
        type: String,
        require: [true, "insira o usuário"]
    },
    animal: Number,
    estatura: Number,
    raca: Number,
    idade: Number

},
{
    timestamps: true
});

const Prefs = mongoose.model('Prefs',prefSchema);
module.exports = Prefs;

