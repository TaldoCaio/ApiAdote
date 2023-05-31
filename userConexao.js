const { error } = require('console');
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority'
const User = require('./model/userModel');
//post insere no banco com um res usando o modelo criado para a tabela


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

app.post('/cadastro', async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
});

//get puxa do banco todos os valores

app.get('/cadastro', async(req,res)=>{
    try {
        const user = await User.find({})
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
});

//puxar por id

app.get('/cadastro/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id)
        if(!user){
            return res.sendStatus(404).json({message: `Produto não encontrado no id ${id}`})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
});

//o put é para update 

app.put('/cadastro/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        //404 se não for encontrado
        if(!user){
            return res.sendStatus(404).json({message: `Produto não encontrado no id ${id}`})
        }
        //retorna o valor mais recente
        const userUpdated = await User.findById(id)
        res.sendStatus(200).json(userUpdated);
    } catch (error) {
        res.sendStatus(500).json(error)
    }
});

//deletar o usuario

app.delete('/cadastro/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json({message: `Produto não encontrado no id ${id}`})
        }
        res.sendStatus(200).json(user)
    } catch (error) {
        res.sendStatus(500).json(error)
    }
});
