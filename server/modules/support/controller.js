const express = require('express');
const router = express.Router();
const supportService = require('./service');

// Endpoint to create Support data
router.post('/', async (req, res) => {
    try {
        const supportData = await supportService.createSupportData(req.body);
        res.status(201).json(supportData);
    } catch (error) {
        console.error("Failed to create Support page data:", error.message);
        res.status(400).json({ error: "Failed to create Support page data" });
    }
});

// Endpoint to retrieve all Support data
router.get('/', async (req, res) => {
    try {
        const supportData = await supportService.getAllSupportData();
        if (!supportData.length) return res.status(404).json({ message: "No Support page data found" });
        res.json(supportData);
    } catch (error) {
        console.error("Error retrieving Support page data:", error.message);
        res.status(500).json({ error: "Error retrieving Support page data" });
    }
});



// update Support page data by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedData = await supportService.updateSupportData(req.params.id, req.body);
        if (!updatedData) return res.status(404).json({ message: "Support page data not found" });
        res.json(updatedData);
    } catch (error) {
        console.error("Failed to update Support page data:", error.message);
        res.status(400).json({ error: "Failed to update Support page data" });
    }
});

// delete Support page data by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedData = await supportService.deleteSupportData(req.params.id);
        if (!deletedData) return res.status(404).json({ message: "Support page data not found" });
        res.json({ message: "Support page data deleted successfully" });
    } catch (error) {
        console.error("Failed to delete Support page data:", error.message);
        res.status(500).json({ error: "Failed to delete Support page data" });
    }
});

module.exports = router;
