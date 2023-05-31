const { error } = require('console');
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority'
const Pet = require('./model/petModel');

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
//CRUD
//sempre que for conectar com o banco use async e await
app.get('/pet', async (req, res) => {
    try {
        const pet = await Pet.find({})
        res.status(200).json(pet);
    } catch (error) {
        res.sendStatus(500).json(error)
    }
});

app.post('/pet/cadastro', async (req, res) => {
    try {
        const pet = await Pet.create(req.body)
        res.sendStatus(200).json(pet)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

app.get('/pet/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const pet = await Pet.findById(id)
        if(!pet){
            return res.sendStatus(404).json({message: `Produto não encontrado no id ${id}`})
        }
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json(error)
    }
});

app.put('/pet/atualizar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByIdAndUpdate(id, req.body);
        if (!pet) {
            return res.sendStatus(404).json({ message: `ID not found` })
        }
        const petUpdate = await Pet.findById(id)
        res.status(200).json(petUpdate)
    } catch (error) {
        res.sendStatus(500).json(error)
    }
});

app.delete('/pet/remove/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByIdAndDelete(id)
        if (!pet) {
            return res.status(404).json({ message: `ID Not found` })
        }
        res.sendStatus(200).json(pet)
    } catch (error) {
        res.sendStatus(500).json(error)
    }
})

