const express = require('express');
const Router = express.Router();

const userRouter = require('../controller/userController');
const matchRouter = require('../controller/matchController');
const prefRouter = require('../controller/prefController')
const caracteristicasRouter = require('../controller/caracteristicaController')
const petRouter = require('../controller/petController')

Router.use('/caracteristicas', caracteristicasRouter);
Router.use('/user', userRouter)
Router.use('/match', matchRouter)
Router.use('/preferencias', prefRouter)
Router.use('/pets', petRouter)

module.exports = Router