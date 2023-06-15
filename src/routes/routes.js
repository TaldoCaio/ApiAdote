const express = require('express');
const {Router} = express
const caracteristicasRouter = require('../controller/caracController')
const userRouter = require('../controller/userController');
const matchRouter = require('../controller/matchController');
const prefRouter = require('../controller/prefController')

const routes = Router

Router.use('/caracteristicas', caracteristicasRouter);
Router.use('/user', userRouter)
Router.use('/match', matchRouter)
Router.use('/preferencias', prefRouter)

module.exports = routes