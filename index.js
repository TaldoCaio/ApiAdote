const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/teste?retryWrites=true&w=majority';
const Router = require('./src/routes/routes');

app.use(cors());
app.use(express.json());
app.use(Router);


mongoose.connect(URI).then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(3100, () => {
        console.log('API rodando na porta 3100');
    });
}).catch((error) => {
    console.log('Erro ao conectar ao MongoDB:', error);
});
