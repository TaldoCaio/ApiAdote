const Prefs = require('../model/prefModel.js');
const express = require('express');
const router = express.Router();
const authenticateToken = require ('../routes/auth')

router.get('/getAll', async (req, res) => {
    try {
        const pref = await Prefs.find({});
        res.status(200).json(pref);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/insert', authenticateToken, async (req, res) => {
    try {
        const pref = await Prefs.create(req.body);
        res.status(200).json(pref);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/pref/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pref = await Prefs.findById(id);
        res.status(200).json(pref);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
