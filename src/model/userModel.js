const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: [true,"insira o nome"]
        },
        email: {
            type: String,
            require: [true,"insira o email"]
        },
        cpf: {
            type: String,
            require: [true,"insira o cpf"]
        },
        senha:{
            type: String,
            require: [true,"insira uma senha"]
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;