const express = require('express');
const router = express.Router();
const Pet = require('../model/petModel');

const petRouter = router()

petRouter.get('/pet', async (req, res) => {
    try {
        const pet = await Pet.find({})
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json(error)
    }
});

petRouter.post('/pet/cadastro', async (req, res) => {
    try {
        const pet = await Pet.create(req.body)
        res.status(200).json(pet)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

petRouter.get('/pet/:id', async (req, res) => {
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

petRouter.put('/pet/atualizar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByIdAndUpdate(id, req.body);
        if (!pet) {
            return res.status(404).json({ message: `ID not found` })
        }
        const petUpdate = await Pet.findById(id)
        res.status(200).json(petUpdate)
    } catch (error) {
        res.status(500).json(error)
    }
});

petRouter.delete('/pet/remove/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByIdAndDelete(id)
        if (!pet) {
            return res.status(404).json({ message: `ID Not found` })
        }
        res.status(200).json(pet)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = petRouter