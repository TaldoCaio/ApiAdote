const { error } = require('console');
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority'
const Pet = require('./model/petModel.js');
const Pref = require('./model/prefModel.js')
const cors = require('cors');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//conecta no banco de dados
mongoose.connect(URI).then(() => {
    console.log('Conectado ao mongoDB')
    //declara a porta
    app.listen(3100, () => {
        console.log('APIpet rodando na porta 3000');
    })
}).catch(() => {
    console.log(error)
});


//faz a busca das caracteristicas em comum no usuario e no animal
app.get('/recomendados/:idUsuario', async (req, res) => {
    try {
        const { idUsuario } = req.params
        //armazena as 3 preferencias do usuário na variavel, usando como busca o ID do usuário
        const pref = await Pref.findOne({ idUsuario }, { _id: 0, animal: 1, raca: 1, estatura: 1 })
        let pet;
        //se existe um animal ou animais que combine 100% mostre na tela
        if (pref) {
            pet = await Pet.find({
                animal: pref.animal,
                raca: pref.raca,
                estatura: pref.estatura,
            });
            //se existe um animal ou animais que combine apenas nessas 2 características mostre na tela
            if (pet.length === 0) {
                pet = await Pet.find({
                    animal: pref.animal,
                    estatura: pref.estatura
                });
            }
            //se nenhuma das caracteristicas especificas forem atendidas, mostre todos os animais do tipo desejado pelo usuario(cachorro,gato,etc..)
        } else {
            pet = await Pet.find({
                animal: pref.animal
            });
        }

        res.status(200).json(pet);
        //se ouver algum erro mostre na tela
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});








