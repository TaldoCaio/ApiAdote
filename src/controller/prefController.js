const Prefs = require('../model/prefModel.js')
const express = require('express');
const router = express.Router();

const prefRouter = router()

prefRouter.get('/pref', async (req, res) => {
    try {
        const pref = await Prefs.find({})
        res.status(200).json(pref);
    } catch (error) {
        res.sendStatus(500).json(error)
    }
});

prefRouter.post('/pref/insert', async (req, res) => {
    try {
        const pref = await Prefs.create(req.body)
        res.status(200).json(pref)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

prefRouter.get('/pref/:id', async (req, res) => {
    try {
        const {id} = req.params
        const pref = await Prefs.findById(id);
        res.status(200).json(pref)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

module.exports = prefRouter

