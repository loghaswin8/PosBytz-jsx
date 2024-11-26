const express = require('express');
const router = express.Router();
const regService = require('./service');

// Register User (and Lead) route
router.post('/api/users', async (req, res) => {
    try {
        const { userData, leadData } = req.body;
        const { lead, user } = await regService.createLeadAndUser(leadData, userData);

        res.status(201).json({
            message: 'User and Lead registered successfully',
            userId: user._id,
            leadId: lead._id
        });
    } catch (error) {
        res.status(400).json({ error: 'Failed to register user and lead', details: error.message });
    }
});

// Fetch all users route
router.get('/api/users', async (req, res) => {
    try {
        const users = await regService.getAllUsers(); // Call service to get all users
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users', details: error.message });
    }
});

module.exports = router;
