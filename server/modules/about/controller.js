const express = require('express');
const router = express.Router();
const aboutService = require('./service');

// GET About Page Data
router.get('/', async (req, res) => {
    try {
        const data = await aboutService.getAboutData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch About page data' });
    }
});

// POST Create About Page Data
router.post('/', async (req, res) => {
    try {
        const data = await aboutService.createAboutData(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create About page data' });
    }
});

// PUT Update About Page Data
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await aboutService.updateAboutData(id, req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update About page data' });
    }
});

// DELETE About Page Data
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await aboutService.deleteAboutData(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete About page data' });
    }
});

module.exports = router;
