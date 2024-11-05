const express = require('express');
const router = express.Router();
const careerService = require('./service');

// Create new Career data
router.post('/', async (req, res) => {
    try {
        const data = await careerService.createCareerData(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Career data', error });
    }
});

// Get all Career data
router.get('/', async (req, res) => {
    try {
        const data = await careerService.getCareerData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving Career data', error });
    }
});

// Update Career data by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedData = await careerService.updateCareerData(req.params.id, req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ message: 'Error updating Career data', error });
    }
});

// Delete Career data by ID
router.delete('/:id', async (req, res) => {
    try {
        await careerService.deleteCareerData(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Career data', error });
    }
});

module.exports = router;
