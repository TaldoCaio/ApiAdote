const express = require('express');
const Router = express.Router();
const User = require('../model/userModel'); 

const userRouter = Router

//post insere no banco com um res usando o modelo criado para a tabela
userRouter.post('/cadastro', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
});

//get puxa do banco todos os valores

userRouter.get('/cadastro/get', async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
});

//puxar por id

userRouter.get('/cadastro/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (!user) {
            return res.sendStatus(404).json({ message: `Produto não encontrado no id ${id}` })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})

//o put é para update 

userRouter.put('/cadastro/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        //404 se não for encontrado
        if (!user) {
            return res.sendStatus(404).json({ message: `Produto não encontrado no id ${id}` })
        }
        //retorna o valor mais recente
        const userUpdated = await User.findById(id)
        res.sendStatus(200).json(userUpdated);
    } catch (error) {
        res.sendStatus(500).json(error)
    }
})

//deletar o usuario

userRouter.delete('/cadastro/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ message: `Produto não encontrado no id ${id}` })
        }
        res.sendStatus(200).json(user)
    } catch (error) {
        res.sendStatus(500).json(error)
    }
});

module.exports = userRouter