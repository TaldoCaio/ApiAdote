const express = require('express');
const router = express.Router();
const caracteristicasRouter = require('../controller/caracController')

router.get('/caracteristicas', caracteristicasRouter)