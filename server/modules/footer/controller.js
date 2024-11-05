const express = require('express');
const router = express.Router();
const footerService = require('./service'); 

router.get('/', async (req, res) => {
    try {
        const footerData = await footerService.getAllFooterData();
        res.status(200).json(footerData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const footerData = await footerService.getFooterDataById(req.params.id);
        if (!footerData) {
            return res.status(404).json({ message: "Footer data not found" });
        }
        res.status(200).json(footerData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const footerData = await footerService.addFooterData(req.body);
        res.status(201).json(footerData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedFooterData = await footerService.updateFooterData(req.params.id, req.body);
        if (!updatedFooterData) {
            return res.status(404).json({ message: "Footer data not found" });
        }
        res.status(200).json(updatedFooterData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedFooterData = await footerService.deleteFooterData(req.params.id);
        if (!deletedFooterData) {
            return res.status(404).json({ message: "Footer data not found" });
        }
        res.status(200).json({ message: "Footer data deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
