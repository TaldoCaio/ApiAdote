const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority'
const Router = require('./src/routes/routes');

app.use(cors())
app.use(Router)
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


mongoose.connect(URI).then(() => {
    console.log('Conectado ao mongoDB')
    //declara a porta

}).catch(() => {
    console.log(error)
});

app.listen(3100, () => {
    console.log('API rodando na porta 3000');
})
