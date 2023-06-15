const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority'
const routes = require('./routes');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(routes)


mongoose.connect(URI).then(() => {
    console.log('Conectado ao mongoDB')
    //declara a porta
    app.listen(3100, () => {
        console.log('API rodando na porta 3000');
    })
}).catch(() => {
    console.log(error)
});
