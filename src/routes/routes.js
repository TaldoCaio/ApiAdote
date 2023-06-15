const express = require('express');
const Router = express.Router();

const userRouter = require('../controller/userController');
const matchRouter = require('../controller/matchController');
const prefRouter = require('../controller/prefController')
const caracteristicasRouter = require('../controller/caracteristicaController')
const petRouter = require('../controller/petController')

const router = Router

router.use('/caracteristicas', caracteristicasRouter);
router.use('/user', userRouter)
router.use('/match', matchRouter)
router.use('/preferencias', prefRouter)
router.use('/pets', petRouter)

module.exports = Router