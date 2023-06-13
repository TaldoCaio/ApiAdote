const { error } = require('console');
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority'
const Prefs = require('./model/prefModel.js')
const cors = require('cors');

//As importações são : mongoose,express e node
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
//CRUD
//sempre que for conectar com o banco use async e await
app.get('/pref', async (req, res) => {
    try {
        const pref = await Prefs.find({})
        res.status(200).json(pref);
    } catch (error) {
        res.sendStatus(500).json(error)
    }
});

app.post('/pref/insert', async (req, res) => {
    try {
        const pref = await Prefs.create(req.body)
        res.status(200).json(pref)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});




app.get('/pref/:id', async (req, res) => {
    try {
        const {id} = req.params
        const pref = await Prefs.findById(id);
        res.status(200).json(pref)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});


