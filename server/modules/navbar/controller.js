const express = require('express');
const router = express.Router();
const navbarService = require('./service');

// GET all navbar data
router.get('/', async (req, res) => {
    try {
        const navbarData = await navbarService.getAllNavbarData();
        res.status(200).json(navbarData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET navbar data by ID
router.get('/:id', async (req, res) => {
    try {
        const navbarData = await navbarService.getNavbarDataById(req.params.id);
        if (!navbarData) return res.status(404).json({ message: "Navbar data not found" });
        res.status(200).json(navbarData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST route for adding navbar data
router.post('/', async (req, res) => {
    try {
        const navbarData = await navbarService.addNavbarData(req.body);
        res.status(201).json(navbarData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT route for updating navbar data by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedNavbarData = await navbarService.updateNavbarData(req.params.id, req.body);
        if (!updatedNavbarData) return res.status(404).json({ message: "Navbar data not found" });
        res.status(200).json(updatedNavbarData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE route for deleting navbar data by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedNavbarData = await navbarService.deleteNavbarData(req.params.id);
        if (!deletedNavbarData) return res.status(404).json({ message: "Navbar data not found" });
        res.status(200).json({ message: "Navbar data deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
