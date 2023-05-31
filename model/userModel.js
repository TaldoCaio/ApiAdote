const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: [true,"insira o nome"]
        },
        endereco: {
            type: String,
            require: [true,"insira o endereco"]
        },
        cpf: {
            type: String,
            require: [true,"insira o cpf"]
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;