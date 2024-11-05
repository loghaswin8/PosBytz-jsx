const express = require('express');
const router = express.Router();
const homeService = require('./service');


const addHomeData = async (req, res) => {
    try {
        const homeData = req.body;
        const addedHomeData = await homeService.addHomeData(homeData);
        res.status(201).json(addedHomeData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllHomeData = async (req, res) => {
    try {
        const homeData = await homeService.getAllHomeData();
        res.status(200).json(homeData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getHomeDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const homeData = await homeService.getHomeDataById(id);
        if (!homeData) {
            return res.status(404).json({ message: "Home data not found" });
        }
        res.status(200).json(homeData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateHomeData = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedHomeData = await homeService.updateHomeData(id, updatedData);
        if (!updatedHomeData) {
            return res.status(404).json({ message: "Home data not found" });
        }
        res.status(200).json(updatedHomeData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteHomeData = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHomeData = await homeService.deleteHomeData(id);
        if (!deletedHomeData) {
            return res.status(404).json({ message: "Home data not found" });
        }
        res.status(200).json({ message: "Home data deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

router.post('/', addHomeData); 
router.get('/', getAllHomeData); 
router.get('/:id', getHomeDataById); 
router.put('/:id', updateHomeData); 
router.delete('/:id', deleteHomeData); 

module.exports = router;
