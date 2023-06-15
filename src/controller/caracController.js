const express = require('express');
const router = express.Router();
const Animais = require('../model/animaisModel');
const Tamanhos = require('../model/tamanhosModel');
const Raca = require('../model/racasModel')

const caracteristicasRouter = router()

caracteristicasRouter.get('/animais', async (req, res) => {
    try {
        const animais = await Animais.find({})
        res.status(200).json(animais)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

caracteristicasRouter.get('/tamanho', async (req, res) => {
    try {
        const tamanho = await Tamanhos.find({})
        res.status(200).json(tamanho)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

caracteristicasRouter.get('/raca', async (req, res) => {
    try {
        const raca = await Raca.find({})
        res.status(200).json(raca)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

caracteristicasRouter.get('/raca/:racaID', async  (req, res) => {
    try {
        const { racaID } = req.params
        const raca = await Raca.find({ racaID })
        res.status(200).json(raca)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

caracteristicasRouter.get('/estatura/:idEstatura', async (req, res) => {
    try {
        const { idEstatura } = req.params
        const estatura = await Tamanhos.find({ idEstatura }, { _id: 0, desc_estatura: 0 })
        res.status(200).json(estatura)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

caracteristicasRouter.get('/animal/:codAnimal', async (req, res) => {
    try {
        const { codAnimal } = req.params
        const animal = await Animais.find({ codAnimal }, { _id: 0, codAnimal: 0 })
        res.status(200).json(animal)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

module.exports = caracteristicasRouter
