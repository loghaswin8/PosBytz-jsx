const express = require('express');
const router = express.Router();
const userService = require('./service');

// Endpoint to create a new user
router.post('/', async (req, res) => {
    try {
        const userData = await userService.createUser(req.body);
        res.status(201).json(userData);
    } catch (error) {
        console.error("Failed to create user:", error);  // Log the error details
        res.status(400).json({ error: "Failed to create user", message: error.message });
    }
});


// Endpoint to retrieve all users
router.get('/', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.json(users);
    } catch (error) {
        console.error("Error retrieving users:", error.message);
        res.status(500).json({ error: "Error retrieving users" });
    }
});

// Endpoint to retrieve a single user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("Error retrieving user:", error.message);
        res.status(500).json({ error: "Error retrieving user" });
    }
});

// Endpoint to update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error("Failed to update user:", error.message);
        res.status(400).json({ error: "Failed to update user" });
    }
});

// Endpoint to delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Failed to delete user:", error.message);
        res.status(500).json({ error: "Failed to delete user" });
    }
});

module.exports = router;
