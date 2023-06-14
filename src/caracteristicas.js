const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority'
const Animais = require('./model/animaisModel');
const Tamanhos = require('./model/tamanhosModel');
const Raca = require('./model/racasModel')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

mongoose.connect(URI).then(() => {
    console.log('Conectado ao mongoDB')
    //declara a porta
    app.listen(3000, () => {
        console.log('API rodando na porta 3000');
    })
}).catch(() => {
    console.log(error)
});


app.get('/animais', async (req, res) => {
    try {
        const animais = await Animais.find({})
        res.status(200).json(animais)
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
})

app.get('/tamanho', async (req,res)=>{
    try {
        const tamanho = await Tamanhos.find({})
        res.status(200).json(tamanho)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/raca', async (req,res)=>{
    try {
        const raca = await Raca.find({})
        res.status(200).json(raca)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/raca/:racaID', async (req,res)=>{
    try {
        const {racaID} = req.params
        const raca = await Raca.find({racaID})
        res.status(200).json(raca)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.get('/estatura/:idEstatura', async (req,res) =>{
    try {
        const {idEstatura} = req.params
        const estatura = await Tamanhos.find({idEstatura},{_id:0,desc_estatura:0})
        res.status(200).json(estatura)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

app.get('/animal/:codAnimal', async (req,res) =>{
    try {
        const {codAnimal} = req.params
        const animal = await Animais.find({codAnimal},{_id:0,codAnimal:0})
        res.status(200).json(animal)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
