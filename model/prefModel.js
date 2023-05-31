const mongoose = require('mongoose');

const prefSchema = mongoose.Schema({

    idUsuario: {
        type: String,
        require: [true, "insira o usuário"]
    },
    animal: Number,
    estatura: Number,
    raca: Number,
    Idade: Number

},
{
    timestamps: true
});

const Pref = mongoose.model('Pref',prefSchema);
module.exports = Pref;

